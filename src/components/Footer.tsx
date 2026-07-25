export default function Footer() {
  return (
    <>
      <div className="footer-amarela"></div>
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <img className="footer-logo" src="/logo-prefeitura.png" alt="Prefeitura de Benjamin Constant" />
              <p className="footer-text">Secretaria Municipal de Empreendedorismo e Emprego da Prefeitura de Benjamin Constant — Amazonas. Vice-campeã nacional do XIII Prêmio Sebrae Prefeitura Empreendedora.</p>
            </div>
            <div>
              <h5>Institucional</h5>
              <ul className="footer-nav-list">
                <li>Quem Somos</li>
                <li>A Secretaria</li>
                <li>Serviços</li>
                <li>Notícias</li>
              </ul>
            </div>
            <div>
              <h5>Contato</h5>
              <div className="footer-contact">
                <div className="footer-contact-info">
                  <div className="footer-contact-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>Rua Frei Ludovico, 750 — Centro<br/>Benjamin Constant / AM</span>
                  </div>
                  <div className="footer-contact-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span>Seg–sex · 8h às 13h</span>
                  </div>
                  <div className="footer-contact-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span>(97) 98128-9272</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 SEMEE · Prefeitura Municipal de Benjamin Constant</span>
            <span>Onde quem trabalha e empreende encontra apoio.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
