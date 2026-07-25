interface Noticia {
  dia: string;
  mes: string;
  ano: string;
  titulo: string;
  texto: string;
  meta: string;
  badge: { label: string; cls: string };
}

const noticias: Noticia[] = [
  {
    dia: '30', mes: 'JUL', ano: '2026',
    titulo: 'I Foro de Inovação Microcosmos reúne instituições de todo o país em Benjamin Constant',
    texto: 'Nos dias 30 e 31 de julho, Benjamin Constant recebe o I Foro de Inovação Microcosmos, com 26 instituições convidadas para discutir inovação, empreendedorismo e desenvolvimento no interior da Amazônia. A SEMEE participa apresentando as políticas municipais de empreendedorismo e emprego.',
    meta: 'AGENDA · BENJAMIN CONSTANT/AM',
    badge: { label: 'Agenda', cls: 'badge-blue' },
  },
  {
    dia: '18', mes: 'MAI', ano: '2026',
    titulo: 'Benjamin Constant é vice-campeã nacional do Prêmio Sebrae Prefeitura Empreendedora',
    texto: 'O projeto "Benjamin Constant Inovadora: Capital Semente e Feiras Indígenas" venceu a etapa estadual do Amazonas, liderou a Região Norte e conquistou o 2º lugar do Brasil na categoria Gestão Inovadora do XIII Prêmio Sebrae Prefeitura Empreendedora, entre mais de 5,5 mil municípios. A entrega aconteceu em cerimônia nacional em Brasília.',
    meta: 'RECONHECIMENTO · XIII PSPE · BRASÍLIA/DF',
    badge: { label: 'Prêmio', cls: 'badge-yellow' },
  },
  {
    dia: '03', mes: 'OUT', ano: '2025',
    titulo: 'Capital Semente: R$ 66 mil investidos e 11 startups selecionadas em edital histórico',
    texto: 'Benjamin Constant tornou-se um dos primeiros municípios do interior do Amazonas a investir recursos próprios em startups locais. O edital Capital Semente selecionou 11 negócios inovadores, que receberam aporte e acompanhamento para desenvolver suas soluções.',
    meta: 'FOMENTO · EDITAL CAPITAL SEMENTE',
    badge: { label: 'Edital', cls: 'badge-green' },
  },
  {
    dia: '12', mes: 'MAR', ano: '2025',
    titulo: 'Município renova com o Sebrae e adere ao ciclo 2025 do Cidade Empreendedora',
    texto: 'Ao longo de 16 meses, o programa Cidade Empreendedora executou 122 ações em 7 eixos e alcançou mais de 2.400 pessoas em Benjamin Constant — da desburocratização às compras públicas de pequenos negócios. O município renovou a parceria para o novo ciclo.',
    meta: 'PARCERIA · SEBRAE/AM',
    badge: { label: 'Programa', cls: 'badge-green' },
  },
];

export default function PageNoticias() {
  return (
    <div className="page active" id="page-noticias">
      <section className="section">
        <div className="container">
          <div className="section-eyebrow">Notícias</div>
          <h2>O que está acontecendo no empreendedorismo de Benjamin Constant.</h2>
          <p className="sub">Editais, cursos, feiras, prêmios e as ações da SEMEE. Esta página é atualizada pela equipe da Secretaria.</p>

          <div className="conv-list reveal">
            {noticias.map((n) => (
              <div className="conv-item" key={n.titulo}>
                <div className="conv-date">
                  <span className="conv-day">{n.dia}</span>
                  <span className="conv-month">{n.mes} · {n.ano}</span>
                </div>
                <div>
                  <div className="conv-h">{n.titulo}</div>
                  <div className="conv-p">{n.texto}</div>
                  <div className="conv-meta">{n.meta}</div>
                </div>
                <span className={`badge ${n.badge.cls}`}>{n.badge.label}</span>
              </div>
            ))}
          </div>

          <div className="painel-note reveal">
            Em breve: publicação de notícias direto pela equipe da SEMEE, com fotos das ações no território.
          </div>
        </div>
      </section>
    </div>
  );
}
