# Playbook — publicar notícia no semee.tech a partir do grupo do WhatsApp

Este arquivo é lido pelo Claude em execução automática (3× ao dia). Siga na ordem.
Cada passo existe porque a falta dele já causou problema.

## Contexto fixo

- Site: **https://semee.tech** (Firebase Hosting, projeto `semee-bc`)
- Repositório local: `C:\Projects\semee-site` · remoto `origin/main`
- Grupo do WhatsApp: **"site semee semeebc.tech"** → `120363430446716638@g.us`
- Quem manda material: **Fred Deivyd Monteiro Cabral**, secretário da SEMEE
- Prefeito: **Semeide Bermeguy** (Instagram `semeidebermeguy_oficial`)
- Grupo de aviso ao Pedro: **"checklist tasks"** → `120363426624624241@g.us`

## 1. Ler o grupo (VPS, somente leitura)

```bash
ssh vps "cd /root/ProjetosCC/scripts/wa && python3 wa_read.py read --jid 120363430446716638@g.us --limit 25 --json"
```

Material do Fred vem em quatro formatos, e às vezes combinados:

| Formato | O que fazer |
|---|---|
| Texto | é o próprio conteúdo da notícia |
| Imagem (card) | baixar de `/root/.whatsapp-bridge/store/<jid>/<arquivo>` via `scp` e usar como `imagem` |
| Vídeo | baixar, gerar `poster`/`thumb`, usar em `videos[]` |
| Áudio | **transcrever**: `/root/wtenv/bin/python /root/ProjetosCC/scripts/whatsapp_transcribe.py --audio <ogg>` |
| Link do Instagram | abrir com `br -i semee goto <url>` e extrair a legenda com `br -i semee text body` (a legenda do post é a fonte mais fiel; `curl` cai no muro de login) |

Sinal de que é para publicar: o Fred escreve **"subir como notícia"**, "sobe isso",
"pra postar" — ou manda material e confirma quando perguntado.

## 2. ⚠️ SEMPRE `git pull` ANTES de editar

```bash
cd C:/Projects/semee-site && git pull --rebase origin main
```

**Isso não é formalidade.** Em 06/08/2026 um deploy foi feito a partir de um clone
atrasado e derrubou do ar duas notícias publicadas horas antes; ficaram fora por
quatro minutos até o conserto. O `dist/` é gerado do que está no disco: clone
velho publica site velho.

## 3. Escrever a notícia

Editar `src/data/noticias.ts` inserindo o item **no topo** do array `noticias`
(o ticker e o banner usam `noticias.slice(0, 8)`, então a ordem é a cronologia).

```ts
{
  id: 'slug-em-minusculas-com-hifen',   // vira o link direto #/noticia/<id>
  dia: '06', mes: 'AGO', ano: '2026',
  titulo: '…',
  curto: '…',                            // versão curta para a faixa
  texto: '…',                            // um parágrafo corrido, prosa, sem bullets
  meta: 'ORIGEM · EIXO · DATA',
  badge: { label: 'Programa', cls: 'badge-green' },
  imagem: { src: '/noticias/x.jpg', alt: '…', thumb: '/noticias/x-thumb.jpg' },
  link: { href: 'https://…', label: 'Assista no Instagram →' },
}
```

`badge.label` já usados: Agenda, Ação, Capacitação, Chamada, Cultura, Economia,
Edital, Governo, Inclusão, Lei, Oportunidade, Programa, Prêmio, Reconhecimento.
`cls`: `badge-green`, `badge-blue`, `badge-yellow`.

Regras de texto (estilo do Pedro):
- prosa didática e humanizada, **não** lista de bullets;
- nada de número, data, parceiro ou premiação que não esteja no material ou em
  fonte pública verificável — na dúvida, não escreva;
- citação entre aspas só se for palavra literal de alguém;
- ligue a notícia ao que o município já vinha fazendo (Cidade Empreendedora,
  Sala do Empreendedor, SIME, ContrataBC, Capital Semente, Prêmio Sebrae);
- não afirme primazia ("primeiro município a…") sem checar.

## 4. Build, deploy e push

```bash
cd C:/Projects/semee-site
npm run build
firebase deploy --only hosting
git add -A && git commit -m "Notícia: …" && git push origin main
```

## 5. Verificar no ar (obrigatório)

```bash
js=$(curl -s https://semee.tech/ | grep -o 'assets/index-[A-Za-z0-9_-]*\.js' | head -1)
curl -s "https://semee.tech/$js" | grep -c "<slug-novo>"
```

Confirme também que **as notícias anteriores continuam presentes** — é a checagem
que pega o acidente do passo 2.

## 6. Avisar

Mandar para o grupo **checklist tasks** (não para o grupo da SEMEE: quem fala com
o Fred é o Pedro):

```bash
printf '%s' "…texto…" | ssh vps "cd /root/ProjetosCC/scripts/wa && python3 wa_send.py --jid 120363426624624241@g.us --stdin"
```

Incluir: o que foi publicado, o link direto `https://semee.tech/#/noticia/<slug>`,
e o que ficou pendente (foto que falta, dúvida a confirmar com o Fred).

## 7. Se não houver nada novo

Não faça nada e não avise. Silêncio é o resultado correto quando o grupo não
trouxe material — aviso a cada 8 horas dizendo "nada novo" treina todo mundo a
ignorar o aviso.
