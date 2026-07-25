import type { TabId } from '../App';

interface Props {
  onNavigate: (id: TabId) => void;
}

export default function PageServicos({ onNavigate }: Props) {
  return (
    <div className="page active" id="page-servicos">

      <section className="section">
        <div className="container">
          <div className="section-eyebrow">Serviços</div>
          <h2>O que a SEMEE oferece a você.</h2>
          <p className="sub">Serviços gratuitos para quem quer empreender, trabalhar ou contratar em Benjamin Constant. O atendimento presencial é feito na Sala do Empreendedor e no posto do SINE, e parte dos serviços já pode ser iniciada por aqui.</p>

          <div className="svc-grid">

            <div className="svc-card reveal">
              <div className="svc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-6 9 6v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h4>Regularize sua empresa</h4>
              <p>Abertura de MEI, alvará de funcionamento, alteração e baixa de registro. Orientação completa e gratuita para formalizar o seu negócio.</p>
              <span className="svc-tag">Sala do Empreendedor</span>
            </div>

            <div className="svc-card reveal reveal-delay-1">
              <div className="svc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h4>Oportunidades de emprego</h4>
              <p>Cadastro de currículo, consulta de vagas e encaminhamento para entrevistas pelo posto municipal do SINE.</p>
              <button className="svc-link" onClick={() => onNavigate('sine')}>Ir para o SINE →</button>
            </div>

            <div className="svc-card reveal reveal-delay-2">
              <div className="svc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <h4>Cursos e formações</h4>
              <p>Capacitações em gestão, vendas, finanças e ofícios, em parceria com o Sebrae e instituições de ensino da região.</p>
              <span className="svc-tag">Turmas divulgadas nas Notícias</span>
            </div>

            <div className="svc-card reveal">
              <div className="svc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg>
              </div>
              <h4>Calculadora de Preço Justo</h4>
              <p>Ferramenta gratuita para prestadores de serviço e produtores calcularem o preço justo do seu trabalho na Amazônia.</p>
              <a className="svc-link" href="https://preco-justo-ia.web.app" target="_blank" rel="noopener noreferrer">Calcular agora ↗</a>
            </div>

            <div className="svc-card reveal reveal-delay-1">
              <div className="svc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>
              </div>
              <h4>Editais e fomento</h4>
              <p>Editais municipais de apoio a startups e empreendedores, como o Capital Semente e o Inova Benjamin. Inscrições divulgadas aqui no site.</p>
              <button className="svc-link" onClick={() => onNavigate('noticias')}>Ver chamadas abertas →</button>
            </div>

            <div className="svc-card reveal reveal-delay-2">
              <div className="svc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4>Trabalhadores eventuais e prestadores</h4>
              <p>Cadastro municipal de trabalhadores eventuais e empresas prestadoras de serviço, com caminho para a formalização e a previdência.</p>
              <button className="svc-link" onClick={() => onNavigate('contratabc')}>Conhecer o ContrataBC →</button>
            </div>

          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-eyebrow reveal">Atendimento presencial</div>
          <h2 className="reveal reveal-delay-1">Sala do Empreendedor: 8 anos ao lado de quem produz.</h2>
          <p className="sub reveal reveal-delay-2">A Sala do Empreendedor de Benjamin Constant funciona há 8 anos como porta de entrada do pequeno negócio na Prefeitura: é lá que o MEI nasce, o alvará sai e o empreendedor encontra orientação para crescer. Procure a equipe da SEMEE no horário de atendimento do Poder Executivo Municipal.</p>
        </div>
      </section>

    </div>
  );
}
