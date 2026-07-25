import type { TabId } from '../App';

interface Props {
  onNavigate: (id: TabId) => void;
}

export default function PageQuemSomos({ onNavigate }: Props) {
  return (
    <div className="page active" id="page-quemsomos">

      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">Lei Municipal nº 1.433 / 2025 · Benjamin Constant · AM</div>
            <h1>Onde quem trabalha e empreende <span className="accent">encontra apoio</span>.</h1>
            <p className="lead">A SEMEE — Secretaria Municipal de Empreendedorismo e Emprego — apoia quem quer abrir, regularizar e crescer o próprio negócio, e conecta trabalhadores às oportunidades de emprego e renda de Benjamin Constant.</p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => onNavigate('servicos')}>Conheça os serviços →</button>
              <button className="btn-ghost" onClick={() => onNavigate('secretaria')}>Sobre a Secretaria</button>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-label">Benjamin Constant Inovadora</div>
            <div className="hero-card-title">Um município premiado por empreender</div>
            <div className="kpi-mini">
              <div className="kpi-mini-item">
                <div className="kpi-mini-num">2º</div>
                <div className="kpi-mini-lab">do Brasil · Prêmio Sebrae</div>
                <svg className="kpi-mini-spark" viewBox="0 0 100 14"><polyline points="0,12 20,10 40,8 60,6 80,4 100,2" fill="none" stroke="#FEDB34" strokeWidth="1.5"/></svg>
              </div>
              <div className="kpi-mini-item">
                <div className="kpi-mini-num">11</div>
                <div className="kpi-mini-lab">Startups · Capital Semente</div>
                <svg className="kpi-mini-spark" viewBox="0 0 100 14"><polyline points="0,11 20,9 40,7 60,6 80,4 100,3" fill="none" stroke="#FEDB34" strokeWidth="1.5"/></svg>
              </div>
              <div className="kpi-mini-item">
                <div className="kpi-mini-num">122</div>
                <div className="kpi-mini-lab">Ações · Cidade Empreendedora</div>
                <svg className="kpi-mini-spark" viewBox="0 0 100 14"><polyline points="0,8 20,9 40,6 60,7 80,3 100,4" fill="none" stroke="#FEDB34" strokeWidth="1.5"/></svg>
              </div>
              <div className="kpi-mini-item">
                <div className="kpi-mini-num">8</div>
                <div className="kpi-mini-lab">Anos de Sala do Empreendedor</div>
                <svg className="kpi-mini-spark" viewBox="0 0 100 14"><polyline points="0,12 20,10 40,8 60,7 80,5 100,3" fill="none" stroke="#FEDB34" strokeWidth="1.5"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="eixos-strip reveal">
        <div className="eixos-grid">
          <div className="eixo reveal reveal-delay-1"><div className="eixo-num">01</div><div className="eixo-content"><h4>Empreendedorismo</h4><p>Abertura, regularização e crescimento de negócios locais.</p></div></div>
          <div className="eixo reveal reveal-delay-2"><div className="eixo-num">02</div><div className="eixo-content"><h4>Emprego &amp; Renda</h4><p>Intermediação de mão de obra e oportunidades pelo SIME.</p></div></div>
          <div className="eixo reveal reveal-delay-3"><div className="eixo-num">03</div><div className="eixo-content"><h4>Qualificação</h4><p>Cursos e formações para empreendedores e trabalhadores.</p></div></div>
          <div className="eixo reveal reveal-delay-4"><div className="eixo-num">04</div><div className="eixo-content"><h4>Trabalho Formalizado</h4><p>Cadastro e valorização de trabalhadores eventuais e prestadores.</p></div></div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-eyebrow reveal">Reconhecimento Nacional</div>
          <h2 className="reveal reveal-delay-1">2º lugar do Brasil entre mais de 5,5 mil municípios.</h2>
          <p className="sub reveal reveal-delay-2">No XIII Prêmio Sebrae Prefeitura Empreendedora, o projeto "Benjamin Constant Inovadora: Capital Semente e Feiras Indígenas" venceu a etapa estadual do Amazonas, liderou a Região Norte e conquistou o 2º lugar nacional na categoria Gestão Inovadora, em cerimônia realizada em Brasília em maio de 2026.</p>

          <div className="premio-strip reveal reveal-delay-2">
            <div className="premio-step"><div className="premio-pos">1º</div><div className="premio-lab">do Amazonas<br/>etapa estadual</div></div>
            <div className="premio-arrow">→</div>
            <div className="premio-step"><div className="premio-pos">1º</div><div className="premio-lab">da Região Norte<br/>na final nacional</div></div>
            <div className="premio-arrow">→</div>
            <div className="premio-step premio-step-destaque"><div className="premio-pos">2º</div><div className="premio-lab">do Brasil<br/>entre 5,5 mil municípios</div></div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-eyebrow reveal">Quem Somos</div>
          <h2 className="reveal reveal-delay-1">Uma secretaria dedicada a quem produz, emprega e trabalha.</h2>
          <p className="sub reveal reveal-delay-2">A SEMEE é o órgão da Prefeitura de Benjamin Constant responsável pelas políticas municipais de empreendedorismo, trabalho, emprego e renda. Atua da Sala do Empreendedor ao SIME, dos editais de fomento à qualificação profissional — sempre com atendimento próximo de quem vive a economia real do município.</p>

          <div className="missao-grid">
            <div className="missao-quote reveal reveal-delay-1">
              <div className="missao-quote-text">"Benjamin Constant mostrou que município do interior do Amazonas pode ser referência nacional em gestão inovadora: Capital Semente para startups locais, feiras indígenas, Sala do Empreendedor e uma rede de inovação que não para de crescer."</div>
              <div className="missao-quote-source">— Benjamin Constant Inovadora · Prêmio Sebrae 2026</div>
            </div>
            <div className="missao-side reveal reveal-delay-2">
              <h4>Missão institucional</h4>
              <p>Fomentar o empreendedorismo local e ampliar o acesso ao trabalho digno, à formalização e à renda em Benjamin Constant, no coração do Alto Solimões.</p>
              <a style={{ cursor: 'pointer' }} onClick={() => onNavigate('secretaria')}>Conheça a estrutura completa →</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
