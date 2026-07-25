# Design System SEMAE

**Sistema de identidade visual** da Secretaria Municipal de Assuntos Estratégicos de Benjamin Constant — Gestão Semeide Bermeguy Porto (2025–2028).

Versão 2.0.0 · Última atualização: abril/2026

---

## Origem da identidade

A paleta e o sistema foram extraídos da **logo oficial da SEMAE**, criada pela Lei Municipal nº 1.414/2025. Os tons de verde são reproduzidos do lettering da palavra "SEMAE"; o amarelo vem da seta ascendente que atravessa a logo; o navy foi adicionado como cor estratégica institucional, dialogando com a estética sóbria do setor público brasileiro.

---

## Paleta

### Verdes (cor primária da SEMAE)

| Token              | Hex       | Uso recomendado                                  |
|--------------------|-----------|--------------------------------------------------|
| `--g1` Verde mais escuro | `#0F3A12` | Rodapés, hovers profundos, textos sobre tinted   |
| `--g2` **Verde primário** | `#22562A` | Logo SEMAE, números em destaque, links, KPIs deltas |
| `--g3` Verde médio | `#2A6B2E` | Acentos secundários, gradientes                  |
| `--g4` Verde claro | `#3D8C42` | Hovers, destaques sutis                          |
| `--g5` Verde tint  | `#E8F1E5` | Badges, fundos sutis (1–5% opacidade)            |

### Amarelos (cor de acento — destaque institucional)

| Token | Hex | Uso |
|---|---|---|
| `--amarelo` **Amarelo SEMAE** | `#FCF016` | Seta da logo, CTAs em fundos escuros, highlights |
| `--amarelo2` Amarelo vibrante | `#FCE615` | Variação para gradientes |

### Navy (cor estratégica)

| Token | Hex | Uso |
|---|---|---|
| `--navy` **Navy primário** | `#0A2540` | Cards de destaque (hero), rodapé closer, ROI box |
| `--navy2` Navy variação | `#0d2d4d` | Gradientes |
| `--navy3` Navy variação | `#143861` | Hovers de tiles navy |

### Neutros (fundos e textos)

| Token | Hex | Uso |
|---|---|---|
| `--bg` Fundo principal | `#F9FAFB` | Body do site/dashboard |
| `--bg2` Fundo secundário | `#F4F7F1` | Hovers de cards, fundos alternados |
| `--white` Branco | `#FFFFFF` | Cartões institucionais, navbar |
| `--border` Borda padrão | `#E5E7EB` | Separadores discretos |
| `--border2` Borda forte | `#D1D5DB` | Separadores enfatizados |
| `--t1` Texto primário | `#0B1220` | Títulos, valores, números em destaque |
| `--t2` Texto secundário | `#374151` | Corpo de texto |
| `--t3` Texto terciário | `#6B7280` | Labels, legendas, fontes |
| `--t4` Texto muted | `#9CA3AF` | Placeholders |

---

## Tipografia

### Famílias

- **Plus Jakarta Sans** (Google Fonts) — `font-display`
  - Pesos: 500, 600, 700, 800
  - Uso: títulos, valores em destaque (big numbers), nomes de eixos
- **DM Sans** (Google Fonts) — `font-body`
  - Pesos: 300, 400, 500, 600
  - Uso: corpo de texto, descrições, parágrafos
- **JetBrains Mono** (Google Fonts) — `font-mono`
  - Pesos: 400, 500, 600
  - Uso: labels técnicos, eyebrows ("EIXO 01"), fontes, dados numéricos em legendas

### Import único

```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

### Hierarquia de tamanhos

- **Hero title** — `clamp(3rem, 8vw, 7rem)` · weight 800 · letter-spacing -0.035em
- **Section title (h2)** — `clamp(2rem, 4vw, 3.2rem)` · weight 800 · letter-spacing -0.025em
- **Card title (h3)** — `1.5rem` · weight 800
- **Big number** — `clamp(2.6rem, 5.5vw, 4.4rem)` · weight 800 · letter-spacing -0.03em
- **Body** — `1rem` · weight 400 · line-height 1.55
- **Eyebrow / Label** — `0.62rem–0.7rem` · uppercase · letter-spacing 0.2em · JetBrains Mono

---

## Componentes

Os componentes a seguir são os blocos básicos reaproveitáveis em todos os artefatos institucionais da SEMAE.

### 1. Big Number (`.bignum`)

KPI numérico com label técnico, valor grande, delta de variação e fonte. Usado em grids de 3 colunas (responsivo para 2 colunas em tablet e 1 em mobile).

### 2. Tile Navy (`.tile-navy`)

Card em fundo navy com label amarelo (eyebrow), valor grande branco e descrição. Usado para destacar conquistas-chave da gestão (Lei 1.414/2025, empresas atraídas, etc.).

### 3. Hero Card (`.hero-card`)

Variante grande do tile-navy, usada no hero do dashboard com destaque para a Lei 1.414/2025.

### 4. Obra Row (`.obra`)

Linha de tabela com: número, título + descrição, valor monetário, fonte e badge de status (Entregue/Em execução/Selecionado).

### 5. Startup Chip (`.startup-chip`)

Card quadrado de startup com número, nome (Plus Jakarta Sans 700), categoria e variação `.both` (presente em dois ciclos) com borda amarela e estrela.

### 6. ROI Box (`.roi-box`)

Caixa navy grande com:
- Frase de impacto no topo (com highlight amarelo)
- Duas colunas (investimento × captação)
- Equação final em destaque
- Caixa de metodologia

### 7. Stars Banner (`.stars-banner`)

Faixa horizontal amarelo-verde para destacar empresas/projetos prioritários ("As estrelas").

### 8. Section Head (`.section-head`)

Cabeçalho de seção com grid 220px + flex: à esquerda o eyebrow "EIXO 0N" + nome, à direita título grande + descrição.

### 9. Closer (`.closer`)

Rodapé navy com:
- Eyebrow amarelo
- Título grande com highlight
- Subtítulo
- Botões CTAs (preenchido + ghost)
- Linha de metadados

### 10. Marquee (`.marquee`)

Ticker animado no topo com fundo navy, texto JetBrains Mono e destaques em amarelo.

---

## Regras de vocabulário institucional

### Proibido (substituir sempre)

| Não usar | Usar em vez |
|---|---|
| **ecossistema** | "atuação estratégica", "rede municipal", "articulação", "microcosmo de inovação", "tecido institucional" |
| **Fale Conosco** | "Conecte-se" |

### Obrigatório

- Numerais com zero à esquerda em sequências curtas: **Eixo 01, Eixo 02, Eixo 03** (não "Eixo 1")
- **INPACTAS** sempre em caixa alta (nunca "Inpactas", "InPACTAS" etc.)
- **DataB** e **RHISA** com capitalização exata
- **Sem emojis** em documentos institucionais (exceto sinais visuais de status como `↑ ↓ ★ →`)

### Tom institucional

- Linguagem **técnica-formal**, registro de articulação federativa
- **Não é marketing** — evitar "incrível", "transformador", "revolucionário" sem ancoragem em dados
- Citar **fontes oficiais sempre** (IBGE, SICONFI, INEP, Ministérios, agências)
- Quando possível, **linkar a fonte original** (ex: matérias de agências oficiais, dashboards de transparência)

---

## Layout e responsividade

### Container

- `max-width: 1320px`
- `padding: 0 2rem` (desktop), `0 1.5rem` (mobile)

### Grid breakpoints

- **Desktop** (`> 1100px`): grids 3-4 colunas
- **Tablet** (`700px – 1100px`): grids 2 colunas, mobile menu colapsado
- **Mobile** (`< 700px`): coluna única, navbar simplificado

### Sticky nav

- `position: sticky`
- `backdrop-filter: blur(12px)`
- Fundo translúcido `rgba(249,250,251,.92)`
- `border-bottom: 1px solid var(--border)`

---

## Arquivos de marca

Logos e ícones disponíveis na pasta `assets/`:

| Arquivo | Dimensões | Uso |
|---|---|---|
| `logo-semae.png` | 1200×785 | Logo principal, fundo transparente, para impressão e exibição em alta |
| `logo-semae-nav.png` | 600×393 | Logo otimizada para uso em navbar (carregamento web) |
| `logo-prefeitura.png` | ~1000×1000 | Logo da gestão Semeide 2025–2028 |
| `favicon.png` | 64×64 | Favicon para aba do navegador (apenas letras SEMAE + seta) |
| `apple-touch-icon.png` | 180×180 | Ícone para "salvar na tela inicial" em iOS/Android |

---

## Como usar em novos projetos

### Em HTML standalone

1. Copiar os arquivos `assets/` e `brand/` para a raiz do projeto
2. Importar as fontes do Google Fonts (link único acima)
3. Declarar os CSS custom properties no `:root` usando os valores deste documento
4. Usar `<link rel="icon" href="assets/favicon.png">` no `<head>`

### Em React/TSX

1. Importar `design-tokens.json` e gerar variáveis CSS automaticamente
2. Ver pasta `react/src/styles/tokens.css` para implementação de referência
3. Componentes reutilizáveis em `react/src/components/`

### Em Claude Design (futuro)

1. Subir `design-tokens.json` e logos como contexto inicial do projeto
2. Linkar o repositório no setup do Design System do Claude Design
3. Cada projeto novo dentro da organização vai herdar a paleta + tipografia automaticamente

---

## Versionamento

- **v1.0** — Janeiro/2026: paleta extraída da logo, primeiros componentes
- **v2.0** — Abril/2026: formalização do design system, adição de Stars Banner, ROI Box, regras de vocabulário institucional

Próximas revisões devem incrementar a versão neste arquivo e em `design-tokens.json`.
