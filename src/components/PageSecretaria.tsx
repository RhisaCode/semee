export default function PageSecretaria() {
  return (
    <div className="page active" id="page-secretaria">

      <section className="section">
        <div className="container">
          <div className="section-eyebrow">A Secretaria</div>
          <h2>Estrutura, atuação e fundamento legal.</h2>
          <p className="sub">A Secretaria Municipal de Empreendedorismo e Emprego — SEMEE — integra a estrutura administrativa da Prefeitura de Benjamin Constant com a finalidade de formular e executar as políticas municipais de empreendedorismo, trabalho, emprego e geração de renda. É a casa do empreendedor e do trabalhador benjaminense dentro do Poder Executivo Municipal.</p>
        </div>
      </section>

      <section className="section section-alt" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-eyebrow reveal" style={{ marginTop: '3rem' }}>Frentes de atuação</div>
          <h2 className="reveal reveal-delay-1" style={{ marginBottom: '2.5rem' }}>O que a SEMEE faz no dia a dia</h2>

          <div className="comp-grid">
            <div className="comp-card reveal"><div className="comp-num">§ 01</div><h4>Sala do Empreendedor</h4><p>Atendimento presencial há 8 anos: abertura de MEI, regularização, alvará e orientação a pequenos negócios.</p></div>
            <div className="comp-card reveal reveal-delay-1"><div className="comp-num">§ 02</div><h4>Intermediação de emprego</h4><p>Operação do SINE municipal: cadastro de trabalhadores, vagas e encaminhamento para oportunidades.</p></div>
            <div className="comp-card reveal reveal-delay-2"><div className="comp-num">§ 03</div><h4>Fomento a startups</h4><p>Editais de Capital Semente e apoio à inovação — 11 startups selecionadas no primeiro edital municipal.</p></div>
            <div className="comp-card reveal reveal-delay-3"><div className="comp-num">§ 04</div><h4>Qualificação profissional</h4><p>Cursos e formações em parceria com Sebrae, instituições de ensino e o Sistema S.</p></div>
            <div className="comp-card reveal"><div className="comp-num">§ 05</div><h4>Feiras e economia local</h4><p>Apoio a feiras indígenas, feiras de empreendedores e circuitos de comercialização da produção local.</p></div>
            <div className="comp-card reveal reveal-delay-1"><div className="comp-num">§ 06</div><h4>Trabalho formalizado</h4><p>Cadastro municipal de trabalhadores eventuais e empresas prestadoras de serviço — a Plataforma ContrataBC.</p></div>
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
              <h4>Lei municipal de criação da SEMEE</h4>
              <p>O texto integral da lei que institui a Secretaria Municipal de Empreendedorismo e Emprego será disponibilizado aqui em PDF.</p>
            </div>
            <a href="#" onClick={(e) => e.preventDefault()} aria-disabled="true" style={{ opacity: .75, cursor: 'default' }}>Em breve · PDF</a>
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
