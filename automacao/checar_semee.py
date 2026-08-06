#!/usr/bin/env python3
"""
Verificador do grupo do WhatsApp da SEMEE — roda 3x ao dia pelo Agendador do Windows.

O que ele faz, em ordem:

  1. lê no VPS as mensagens novas do grupo "site semee semeebc.tech";
  2. decide se há material para publicar (mídia nova, ou texto com intenção de
     publicar como "subir como notícia");
  3. se houver, chama o Claude Code em modo não interativo com o
     PLAYBOOK-NOTICIAS.md, que escreve, publica e verifica a notícia;
  4. guarda o carimbo da última mensagem vista, para não repetir trabalho.

Se não houver material novo, o script termina em silêncio e sem gastar token —
o custo só aparece quando existe trabalho de verdade.

Uso:
    python checar_semee.py            # execução normal
    python checar_semee.py --dry-run  # só diz o que faria
"""

import json
import os
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

AQUI = Path(__file__).resolve().parent
REPO = AQUI.parent
ESTADO = AQUI / 'estado.json'
LOGS = AQUI / 'logs'
TRAVA = AQUI / '.rodando'

GRUPO_SEMEE = '120363430446716638@g.us'
GRUPO_AVISO = '120363426624624241@g.us'  # "checklist tasks"
DB = '/root/.whatsapp-bridge/store/messages.db'

# Palavras que, vindas do Fred, significam "publica isso".
INTENCAO = [
    'subir como noticia', 'subir como notícia', 'sobe como noticia', 'sobe como notícia',
    'subir noticia', 'subir notícia', 'sobe isso', 'sobe essa', 'pra postar', 'para postar',
    'publica', 'publicar', 'boa noticia', 'boa notícia', 'ótima notícia', 'otima noticia',
]

TIMEOUT_CLAUDE = 25 * 60  # o trabalho inclui build, deploy e verificação


def log(msg: str) -> None:
    LOGS.mkdir(exist_ok=True)
    agora = datetime.now(timezone.utc).astimezone()
    linha = f'[{agora:%Y-%m-%d %H:%M:%S}] {msg}'
    # sob pythonw.exe (tarefa agendada sem console) sys.stdout é None
    try:
        print(linha, flush=True)
    except Exception:  # noqa: BLE001
        pass
    with open(LOGS / f'{agora:%Y-%m}.log', 'a', encoding='utf-8') as f:
        f.write(linha + '\n')


def ler_estado() -> dict:
    if ESTADO.exists():
        try:
            return json.loads(ESTADO.read_text(encoding='utf-8'))
        except json.JSONDecodeError:
            log('estado.json ilegível — recomeçando do zero')
    return {}


def gravar_estado(d: dict) -> None:
    ESTADO.write_text(json.dumps(d, ensure_ascii=False, indent=2), encoding='utf-8')


def ssh(comando: str, timeout: int = 120) -> str:
    # `-n` e stdin=DEVNULL são obrigatórios: rodando pelo Agendador de Tarefas não
    # existe stdin válido, e o ssh fica pendurado esperando entrada até o timeout.
    r = subprocess.run(
        ['ssh', '-n', '-o', 'BatchMode=yes', '-o', 'ConnectTimeout=20', 'vps', comando],
        capture_output=True, text=True, encoding='utf-8', errors='replace', timeout=timeout,
        stdin=subprocess.DEVNULL,
    )
    if r.returncode != 0:
        raise RuntimeError(f'ssh falhou ({r.returncode}): {(r.stderr or "").strip()[:300]}')
    return r.stdout


def mensagens_novas(desde: str) -> list:
    sql = (
        "SELECT timestamp, sender, is_from_me, media_type, filename, content "
        f"FROM messages WHERE chat_jid='{GRUPO_SEMEE}' AND timestamp > '{desde}' "
        "ORDER BY timestamp"
    )
    saida = ssh(f'sqlite3 -json {DB} "{sql}"').strip()
    if not saida:
        return []
    return json.loads(saida)


def tem_material(msgs: list) -> tuple:
    """Devolve (bool, motivo). Só mensagem RECEBIDA conta — o que o Pedro escreve não."""
    recebidas = [m for m in msgs if not m.get('is_from_me')]
    if not recebidas:
        return False, 'nada recebido'
    midias = [m for m in recebidas if m.get('media_type') in ('image', 'video', 'audio', 'document')]
    if midias:
        return True, f'{len(midias)} mídia(s) nova(s) no grupo'
    for m in recebidas:
        texto = (m.get('content') or '').lower()
        if any(p in texto for p in INTENCAO):
            return True, f'pedido explícito: "{(m.get("content") or "")[:80]}"'
        if 'instagram.com' in texto:
            return True, 'link de post do Instagram'
    return False, f'{len(recebidas)} mensagem(ns) sem material'


def avisar(texto: str) -> None:
    try:
        p = subprocess.run(
            ['ssh', 'vps', f'cd /root/ProjetosCC/scripts/wa && python3 wa_send.py --jid {GRUPO_AVISO} --stdin'],
            input=texto, capture_output=True, text=True, encoding='utf-8', timeout=120,
        )
        log(f'aviso enviado (rc={p.returncode})')
    except Exception as e:  # noqa: BLE001 — aviso é melhor-esforço
        log(f'não consegui avisar: {e}')


PROMPT = """Você está rodando sozinho, sem ninguém para responder pergunta.

O grupo do WhatsApp da SEMEE tem material novo ({motivo}).

Leia e siga o arquivo automacao/PLAYBOOK-NOTICIAS.md deste repositório, do começo
ao fim, e publique a notícia no semee.tech se — e somente se — o material do Fred
for de fato para publicar. Se depois de ler o grupo você concluir que não é caso de
publicar (conversa solta, dúvida, assunto interno), não publique nada: apenas
escreva no final o que você viu e por que não publicou.

Regras que não se negociam:
- `git pull --rebase origin main` ANTES de qualquer edição (um deploy a partir de
  clone atrasado já derrubou notícias publicadas);
- não invente número, data, parceria nem premiação: só o que está no material ou
  em fonte pública verificável;
- ao final, confira no ar que a notícia nova apareceu E que as anteriores
  continuam lá;
- avise no grupo "checklist tasks" (nunca no grupo da SEMEE) com o link direto.

Termine a sua resposta com uma linha começando por RESULTADO: seguida de
PUBLICADO <slug> ou NADA <motivo curto>."""


def chamar_claude(motivo: str) -> str:
    cmd = [
        'claude', '-p', PROMPT.format(motivo=motivo),
        '--allowedTools', 'Bash', 'Read', 'Edit', 'Write', 'Glob', 'Grep', 'WebFetch', 'WebSearch',
    ]
    log('chamando o Claude Code…')
    r = subprocess.run(
        cmd, cwd=str(REPO), capture_output=True, text=True,
        encoding='utf-8', errors='replace', timeout=TIMEOUT_CLAUDE,
        stdin=subprocess.DEVNULL,
    )
    saida = (r.stdout or '').strip()
    if r.returncode != 0:
        log(f'claude terminou com rc={r.returncode}: {(r.stderr or "")[:400]}')
    (LOGS / f'{datetime.now():%Y-%m-%d_%H%M}-claude.txt').write_text(
        saida + '\n\n--- stderr ---\n' + (r.stderr or ''), encoding='utf-8'
    )
    return saida


def main() -> int:
    seco = '--dry-run' in sys.argv

    if TRAVA.exists():
        idade = (datetime.now().timestamp() - TRAVA.stat().st_mtime) / 60
        if idade < 40:
            log(f'já há uma execução em andamento ({idade:.0f} min) — saindo')
            return 0
        log('trava velha encontrada — assumindo execução travada e seguindo')
    TRAVA.write_text(str(os.getpid()), encoding='utf-8')

    try:
        estado = ler_estado()
        desde = estado.get('ultimo_ts') or '2026-08-06 22:00:00+00:00'
        log(f'verificando mensagens depois de {desde}')

        try:
            msgs = mensagens_novas(desde)
        except Exception as e:  # noqa: BLE001
            log(f'falhei ao ler o grupo: {e}')
            return 1

        if not msgs:
            log('nenhuma mensagem nova no grupo')
            return 0

        ultimo = max(m['timestamp'] for m in msgs)
        achou, motivo = tem_material(msgs)
        log(f'{len(msgs)} mensagem(ns) nova(s) · material={achou} · {motivo}')

        if not achou:
            if not seco:
                estado['ultimo_ts'] = ultimo
                estado['ultima_checagem'] = datetime.now(timezone.utc).isoformat()
                gravar_estado(estado)
            return 0

        if seco:
            log('DRY-RUN: aqui eu chamaria o Claude para publicar')
            return 0

        saida = chamar_claude(motivo)
        resultado = next(
            (l for l in reversed(saida.splitlines()) if l.strip().startswith('RESULTADO:')),
            'RESULTADO: (não declarado)',
        )
        log(resultado)

        estado['ultimo_ts'] = ultimo
        estado['ultima_checagem'] = datetime.now(timezone.utc).isoformat()
        estado['ultimo_resultado'] = resultado
        gravar_estado(estado)

        if 'NADA' in resultado or 'não declarado' in resultado:
            avisar(
                'Robô do site da SEMEE: o Fred mandou material no grupo '
                f'({motivo}), mas eu não publiquei.\n\n{resultado}\n\n'
                'Se for para subir, me chama que eu faço.'
            )
        return 0
    finally:
        TRAVA.unlink(missing_ok=True)


if __name__ == '__main__':
    sys.exit(main())
