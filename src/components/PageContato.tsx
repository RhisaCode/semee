export default function PageContato() {
  return (
    <div className="page active" id="page-contato">
      <section className="section">
        <div className="container">
          <div className="section-eyebrow">Contato</div>
          <h2>Fale com a Secretaria de Empreendedorismo e Emprego.</h2>
          <p className="sub">Empreendedores, trabalhadores, empregadores e instituições parceiras podem procurar a SEMEE para atendimento, propostas de parceria, editais e informações sobre os serviços da Secretaria.</p>

          <div className="contato-grid">
            <div className="contato-left reveal">
              <div className="contato-eyebrow">Atendimento ao público</div>
              <h3>Onde nos encontrar</h3>
              <p>A SEMEE atende presencialmente na Sala do Empreendedor, na sede da Prefeitura Municipal de Benjamin Constant, no horário regular do Poder Executivo Municipal.</p>

              <div className="contato-info">
                <div className="contato-info-item">
                  <div className="contato-info-icon">⌖</div>
                  <div className="contato-info-text">
                    <strong>Endereço</strong>
                    <span>Rua Frei Ludovico, nº 750 — Centro<br/>Benjamin Constant — AM · CEP 69.630-000</span>
                  </div>
                </div>
                <div className="contato-info-item">
                  <div className="contato-info-icon">◔</div>
                  <div className="contato-info-text">
                    <strong>Horário</strong>
                    <span>Segunda a sexta-feira<br/>08h às 13h</span>
                  </div>
                </div>
                <div className="contato-info-item">
                  <div className="contato-info-icon">✆</div>
                  <div className="contato-info-text">
                    <strong>Telefone / WhatsApp</strong>
                    <span>(97) 98128-9272</span>
                  </div>
                </div>
                <div className="contato-info-item">
                  <div className="contato-info-icon">@</div>
                  <div className="contato-info-text">
                    <strong>E-mail da Secretaria</strong>
                    <span>semetur.pmbc@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contato-right reveal reveal-delay-2">
              <h4>Envie uma mensagem</h4>
              <div className="form-row">
                <div className="form-group">
                  <label>Nome completo</label>
                  <input type="text" placeholder="Seu nome"/>
                </div>
                <div className="form-group">
                  <label>Telefone / WhatsApp</label>
                  <input type="text" placeholder="(97) 9 0000-0000"/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>E-mail</label>
                  <input type="email" placeholder="seu@email.com"/>
                </div>
                <div className="form-group">
                  <label>Assunto</label>
                  <select>
                    <option>Abrir ou regularizar empresa</option>
                    <option>Vagas de emprego (SINE)</option>
                    <option>Cadastro ContrataBC</option>
                    <option>Cursos e formações</option>
                    <option>Editais e fomento</option>
                    <option>Parcerias institucionais</option>
                    <option>Outros</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Mensagem</label>
                <textarea placeholder="Descreva brevemente o que você precisa..."></textarea>
              </div>
              {/* TODO: integrar formulário com Formspree, EmailJS ou endpoint próprio antes da divulgação ampla */}
              <button
                className="form-submit"
                onClick={(e) => { e.preventDefault(); alert('Formulário em integração. Por enquanto, fale conosco pelo WhatsApp (97) 98128-9272.'); }}
              >Enviar mensagem →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
