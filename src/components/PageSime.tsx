import type { TabId } from '../App';

interface Props {
  onNavigate: (id: TabId) => void;
}

export default function PageSime({ onNavigate }: Props) {
  return (
    <div className="page active" id="page-sime">

      <section className="section">
        <div className="container">
          <div className="section-eyebrow">SIME · Sistema Municipal de Emprego</div>
          <h2>Oportunidades de emprego perto de você.</h2>
          <p className="sub">O SIME — Sistema Municipal de Emprego de Benjamin Constant — é operado pela SEMEE e conecta trabalhadores e empregadores do município: cadastro de currículo, divulgação de vagas, encaminhamento para entrevistas e orientação sobre direitos do trabalhador.</p>

          <div className="comp-grid">
            <div className="comp-card reveal"><div className="comp-num">§ 01</div><h4>Cadastro de currículo</h4><p>Cadastre seu perfil profissional no SIME para concorrer às vagas divulgadas no município.</p></div>
            <div className="comp-card reveal reveal-delay-1"><div className="comp-num">§ 02</div><h4>Vagas de emprego</h4><p>Empregadores divulgam vagas gratuitamente; trabalhadores são encaminhados conforme o perfil.</p></div>
            <div className="comp-card reveal reveal-delay-2"><div className="comp-num">§ 03</div><h4>Carteira de Trabalho Digital</h4><p>Orientação para emitir e usar a Carteira de Trabalho Digital pelo aplicativo do Governo Federal.</p></div>
            <div className="comp-card reveal"><div className="comp-num">§ 04</div><h4>Seguro-desemprego</h4><p>Informações e encaminhamento para solicitar o benefício em caso de demissão sem justa causa.</p></div>
            <div className="comp-card reveal reveal-delay-1"><div className="comp-num">§ 05</div><h4>Para empregadores</h4><p>Anuncie vagas e receba candidatos pré-selecionados pelo SIME, sem custo.</p></div>
            <div className="comp-card reveal reveal-delay-2"><div className="comp-num">§ 06</div><h4>Qualificação</h4><p>Encaminhamento para cursos e formações que aumentam as chances de contratação.</p></div>
          </div>

          <div className="lei-box reveal" style={{ marginTop: '2.5rem' }}>
            <div>
              <h4>Painel de vagas on-line em breve</h4>
              <p>As vagas abertas passarão a ser publicadas nesta página. Enquanto isso, consulte o atendimento do SIME presencialmente ou fale com a SEMEE.</p>
            </div>
            <a style={{ cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); onNavigate('contato'); }}>Falar com a SEMEE →</a>
          </div>

          <div className="painel-note reveal">
            Serviços federais úteis: <a href="https://www.gov.br/trabalho-e-emprego/pt-br/servicos/trabalhador" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Portal do Trabalhador (gov.br)</a> e <a href="https://www.gov.br/trabalho-e-emprego/pt-br/servicos/trabalhador/carteira-de-trabalho-digital" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Carteira de Trabalho Digital</a>.
          </div>
        </div>
      </section>

    </div>
  );
}
