import type { TabId } from '../App';

interface Props {
  onNavigate: (id: TabId) => void;
}

export default function PageContrataBC({ onNavigate }: Props) {
  return (
    <div className="page active" id="page-contratabc">

      <section className="section">
        <div className="container">
          <div className="section-eyebrow">Plataforma ContrataBC</div>
          <h2>O portal do trabalhador eventual e do prestador de serviço.</h2>
          <p className="sub">O ContrataBC é o cadastro municipal que dá visibilidade e caminho de formalização a quem vive de serviços em Benjamin Constant — o pedreiro, a costureira, o roçador, a doceira, a empresa prestadora. Quem está no cadastro pode ser encontrado para trabalhos, comprovar sua atividade e começar a construir sua previdência.</p>

          <div className="steps-grid">
            <div className="step-card reveal">
              <div className="step-num">01</div>
              <h4>Cadastre-se</h4>
              <p>Trabalhador eventual ou empresa prestadora de serviço apresenta seus dados e documentos à equipe da SEMEE.</p>
            </div>
            <div className="step-card reveal reveal-delay-1">
              <div className="step-num">02</div>
              <h4>Seja encontrado</h4>
              <p>O cadastro conecta quem precisa contratar um serviço — famílias, comércios e a própria Prefeitura — a quem sabe fazer.</p>
            </div>
            <div className="step-card reveal reveal-delay-2">
              <div className="step-num">03</div>
              <h4>Cobre o preço justo</h4>
              <p>Use a Calculadora de Preço Justo para precificar seu serviço com dignidade, sem cobrar nem menos nem mais do que vale.</p>
            </div>
            <div className="step-card reveal reveal-delay-3">
              <div className="step-num">04</div>
              <h4>Formalize e se proteja</h4>
              <p>Com atividade comprovada, o trabalhador é orientado a contribuir com a previdência — construindo o direito à aposentadoria.</p>
            </div>
          </div>

          <div className="lei-box reveal" style={{ marginTop: '2.5rem' }}>
            <div>
              <h4>Plataforma digital em desenvolvimento</h4>
              <p>O cadastro on-line do ContrataBC está em construção. Por enquanto, o cadastramento é presencial, com a equipe da SEMEE na Sala do Empreendedor.</p>
            </div>
            <a style={{ cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); onNavigate('contato'); }}>Falar com a SEMEE →</a>
          </div>

          <div className="painel-note reveal">
            Ferramenta parceira: a <a href="https://preco-justo-ia.web.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Calculadora de Preço Justo da Amazônia</a> ajuda prestadores de serviço a saber quanto cobrar.
          </div>
        </div>
      </section>

    </div>
  );
}
