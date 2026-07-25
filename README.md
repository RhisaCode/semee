# SEMEE — Site Institucional

Site da **Secretaria Municipal de Empreendedorismo e Emprego (SEMEE)** da Prefeitura de Benjamin Constant/AM.

- **Produção:** https://semee-bc.web.app (domínio: semeebc.tech)
- **Stack:** Vite 5 + React 18 + TypeScript (mesmo padrão dos sites SEMAE e SEMCTI)
- **Hospedagem:** Firebase Hosting (projeto `semee-bc`), deploy automático via GitHub Actions no push para `main`

## Abas

Quem Somos · A Secretaria · Serviços · Notícias · Plataforma ContrataBC · SIME · Contato

## Desenvolvimento

```bash
npm install
npm run dev     # localhost:5173
npm run build   # dist/
```

## Identidade visual

Paleta extraída da logomarca oficial da SEMEE (`brand/`): verde `#37B54A`, azul `#16548F`, verde-escuro `#016839`, amarelo `#FEDB34`. Tipografia Plus Jakarta Sans + DM Sans + JetBrains Mono — mesma família visual da SEMAE, com verde mais vivo e azul royal no lugar do navy.

## Pendências de conteúdo

- [ ] Lei municipal de criação da SEMEE (PDF em `public/` + número/data na aba A Secretaria)
- [ ] Fotos da equipe, Sala do Empreendedor e feiras
- [ ] Integração do formulário de contato (Formspree/EmailJS)
- [ ] Painel de vagas do SIME
- [ ] Cadastro on-line do ContrataBC
