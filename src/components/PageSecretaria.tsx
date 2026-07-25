// Lei nº 1.433/2025 — PDF hospedado no próprio site (public/), sem dependência externa
const LEI_PDF = '/lei-1433-2025.pdf';

export default function PageSecretaria() {
  return (
    <div className="page active" id="page-secretaria">

      <section className="section">
        <div className="container">
          <div className="section-eyebrow">A Secretaria</div>
          <h2>Estrutura, competências e fundamento legal.</h2>
          <p className="sub">A Secretaria Municipal de Empreendedorismo e Emprego — SEMEE — foi criada pela Lei Municipal nº 1.433, de 26 de setembro de 2025, que desmembrou a antiga Secretaria de Empreendedorismo e Turismo (SEMET). Sua finalidade, definida no Art. 10, é planejar, coordenar e executar as políticas públicas voltadas ao incentivo ao empreendedorismo, ao emprego, ao apoio a micro e pequenos negócios e ao fortalecimento da economia local.</p>
        </div>
      </section>

      <section className="section section-alt" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-eyebrow reveal" style={{ marginTop: '3rem' }}>Competências legais · Art. 10 · Lei nº 1.433/2025</div>
          <h2 className="reveal reveal-delay-1" style={{ marginBottom: '2.5rem' }}>Oito frentes de atuação institucional</h2>

          <div className="comp-grid">
            <div className="comp-card reveal"><div className="comp-num">§ 01</div><h4>Capacitação e formação empreendedora</h4><p>Programas de capacitação profissional e formação empreendedora em parceria com o Sistema S (Sebrae, Senai, Senac), universidades e instituições de ensino.</p></div>
            <div className="comp-card reveal reveal-delay-1"><div className="comp-num">§ 02</div><h4>Crédito e financiamento</h4><p>Políticas de apoio ao crédito e acesso a financiamentos para pequenos negócios locais, em parceria com instituições financeiras.</p></div>
            <div className="comp-card reveal reveal-delay-2"><div className="comp-num">§ 03</div><h4>Feiras e rodadas de negócios</h4><p>Promoção de feiras, rodadas de negócios e eventos que estimulem o comércio local e a integração de empreendedores.</p></div>
            <div className="comp-card reveal reveal-delay-3"><div className="comp-num">§ 04</div><h4>Emprego e renda</h4><p>Programas de geração de emprego e renda, articulando intermediação de mão de obra e qualificação profissional.</p></div>
            <div className="comp-card reveal"><div className="comp-num">§ 05</div><h4>Banco de Oportunidades</h4><p>Manutenção do Banco Municipal de Oportunidades de Emprego, articulando vagas junto a empresas e instituições locais.</p></div>
            <div className="comp-card reveal reveal-delay-1"><div className="comp-num">§ 06</div><h4>Juventude</h4><p>Articulação de políticas públicas de juventude voltadas à inserção no mercado de trabalho.</p></div>
            <div className="comp-card reveal reveal-delay-2"><div className="comp-num">§ 07</div><h4>Economia solidária</h4><p>Parcerias com órgãos públicos e privados para incentivo à economia solidária e ao cooperativismo.</p></div>
            <div className="comp-card reveal reveal-delay-3"><div className="comp-num">§ 08</div><h4>Inclusão produtiva</h4><p>Projetos de apoio à empregabilidade de mulheres, jovens, pessoas com deficiência e demais grupos em situação de vulnerabilidade social.</p></div>
          </div>

          <div className="painel-note reveal">
            A SEMEE acumula ainda as atribuições do Art. 115 da Lei nº 1.398/2024: formalização de empresas, mentorias e consultorias a empreendedores, fomento a incubadoras e polos de inovação, e atração de investimentos para a região.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-eyebrow reveal">Equipe</div>
          <h2 className="reveal reveal-delay-1">Direção da Secretaria</h2>

          <div className="equipe-grid">
            <div className="equipe-card reveal reveal-delay-1">
              <div className="equipe-avatar">FC</div>
              <div>
                <div className="equipe-nome">Fred Deivyd Monteiro Cabral</div>
                <div className="equipe-cargo">Secretário Municipal de Empreendedorismo e Emprego</div>
              </div>
            </div>
            <div className="equipe-card reveal reveal-delay-2">
              <div className="equipe-avatar">AC</div>
              <div>
                <div className="equipe-nome">Adjalma Camelo da Silva</div>
                <div className="equipe-cargo">Subsecretário Municipal</div>
              </div>
            </div>
          </div>

          <div className="lei-box reveal">
            <div>
              <h4>Lei Municipal nº 1.433, de 26 de setembro de 2025</h4>
              <p>Desmembra a Secretaria Municipal de Empreendedorismo e Turismo, cria a SEMEE e a SEMTUR e define as competências da Secretaria. Publicada no Diário Oficial dos Municípios do Amazonas em 29/09/2025 (edição 3.950).</p>
            </div>
            <a href={LEI_PDF} target="_blank" rel="noopener noreferrer">Ver Lei (PDF) ↗</a>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-eyebrow reveal">Microcosmo do Empreendedorismo</div>
          <h2 className="reveal reveal-delay-1">Benjamin Constant como referência para a Amazônia.</h2>
          <p className="sub reveal reveal-delay-2">A SEMEE integra o microcosmo de inovação de Benjamin Constant — a articulação entre Prefeitura, universidades, Sebrae e empreendedores que fez um município da tríplice fronteira ser reconhecido nacionalmente. O modelo combina fomento direto (Capital Semente), atendimento contínuo (Sala do Empreendedor), qualificação e valorização das vocações locais, das feiras indígenas à bioeconomia, e hoje inspira outros municípios do interior do Amazonas.</p>
        </div>
      </section>

    </div>
  );
}
