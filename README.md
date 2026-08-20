# SEMEE — Site Institucional (Benjamin Constant/AM)

## O que é

Site da **SEMEE — Secretaria Municipal de Empreendedorismo e Emprego** da Prefeitura de Benjamin Constant/AM, feito **do zero** por Pedro Mariosa (com Claude) em **24/07/2026** — o terceiro da família de sites das secretarias de Benjamin Constant, ao lado de SEMAE e SEMCTI.

Abas: **Quem Somos · A Secretaria · Serviços · Notícias · Plataforma ContrataBC · SIME · Contato**.

- A aba **A Secretaria** integra a base legal: **Lei Municipal nº 1.433, de 26/09/2025** (DOM/AM ed. 3.950), que desmembrou a SEMET em SEMEE + SEMTUR — PDF self-hosted em `public/lei-1433-2025.pdf`.
- **Notícias** vivem em `src/data/noticias.ts` e alimentam também o ticker do topo.
- **SIME** = Sistema Municipal de Emprego (municipal — **não** é o SINE).
- Conteúdo real publicado: prêmio **XIII PSPE — 2º lugar do Brasil** (Gestão Inovadora, Brasília, 18/05/2026); **Capital Semente R$ 66 mil / 11 startups**; adesão ao **Cidade Empreendedora** ciclo 2027/2028 (assinada 06/08/2026); curso Nova Aliança com 49 participantes.

## Cliente/Contexto

- **Cliente:** Prefeitura de Benjamin Constant/AM. Secretário: **Fred Deivyd Monteiro Cabral**; subsecretário: **Adjalma Camelo**.
- **Produção:** Pedro Mariosa (INPACTAS/UFAM), site autoral do zero — diferente de SEMAE/SEMCTI, cuja base foi do Gabriel Venturini.
- **Faturamento:** item flexível do 1º contrato de renovação Acariquara × SEMAE/PMBC.
- Este é o **único repositório público** da família — mantido público deliberadamente.

## Stack

- **Vite 5 + React 18 + TypeScript** (mesmo padrão de SEMAE e SEMCTI).
- Paleta extraída da logomarca oficial (`brand/`): verde `#37B54A`, azul `#16548F`, verde-escuro `#016839`, amarelo `#FEDB34`. Tipografia Plus Jakarta Sans + DM Sans + JetBrains Mono.
- **Hospedagem:** Firebase Hosting (projeto `semee-bc`, conta do Pedro), **CI GitHub Actions** push→deploy na `main` (service account `github-action-deploy@semee-bc`).
- **Automação de notícias:** `automacao/checar_semee.py` — tarefa Windows "SemeeNoticias" 3x/dia lê o grupo do WhatsApp do secretário Fred (via bridge no VPS) e publica notícias com `claude -p`, seguindo `automacao/PLAYBOOK-NOTICIAS.md`; estado/cursor em `estado.json` (cursor compartilhado do VPS é a verdade). Vigília também via skill `/semee-noticias`.

## URLs vivas

| URL | O que é |
|---|---|
| https://semee.tech | Domínio oficial (registrado pelo Pedro em 25/07/2026, expira 2027-07-25; HTTP 200 verificado em 19/08/2026) |
| https://semee-bc.web.app | Firebase Hosting (mesmo conteúdo, alvo do CI) |

## Estrutura do repo

```
├── index.html · vite.config.ts · tsconfig.json · package.json
├── src/                  # App React (abas, componentes, estilos)
│   └── data/noticias.ts  # notícias + ticker (conteúdo editável)
├── public/               # favicons, logos, lei-1433-2025.pdf
├── brand/                # logomarca e paleta
├── automacao/            # vigia de notícias (checar_semee.py, PLAYBOOK-NOTICIAS.md, instalar-tarefa.ps1)
└── firebase.json         # hosting
```

## Como rodar/Deploy

```bash
npm install
npm run dev     # localhost:5173
npm run build   # dist/
```

**Deploy:** push na `main` → GitHub Actions builda e publica no Firebase. **Regra operacional: SEMPRE `git pull --rebase` antes de editar** — VPS e Mac também commitam neste repo; o incidente de 06/08/2026 derrubou notícias do ar por deploy de um clone defasado.

## Estado e pendências

- **Estado:** no ar e estável (200 em 19/08/2026), com loop de notícias 3x/dia ativo e notícias reais publicadas até 15/08/2026.
- Pendências de conteúdo:
  - [ ] Fotos da equipe, Sala do Empreendedor e feiras
  - [ ] Integração do formulário de contato (Formspree/EmailJS)
  - [ ] Painel de vagas do SIME
  - [ ] Cadastro on-line do ContrataBC
- (A Lei 1.433/2025, antes pendente, **já foi obtida e integrada** ao site.)

## Histórico

| Data (2026) | Evento |
|---|---|
| 24/07 | v1 do site, feito do zero |
| 25/07 | Registro do domínio semee.tech (Porkbun) |
| 26/07 | HTTPS ativo no semee.tech; abas de Notícias + ticker |
| 06/08 | Loop de notícias 3x/dia (tarefa "SemeeNoticias"); incidente do clone defasado origina a regra do `pull --rebase` |
| 10/08 e 15/08 | Novas notícias publicadas; aviso ao Fred no grupo pós-publicação vira ordem permanente (§6 do playbook, `a604cdd`) |
