import { useState } from 'react';
import type { TabId } from '../App';

interface Props {
  activeTab: TabId;
  onNavigate: (id: TabId) => void;
}

const tabs: { id: TabId; label: string }[] = [
  { id: 'quemsomos',  label: 'Quem Somos' },
  { id: 'secretaria', label: 'A Secretaria' },
  { id: 'servicos',   label: 'Serviços' },
  { id: 'noticias',   label: 'Notícias' },
  { id: 'contratabc', label: 'ContrataBC' },
  { id: 'sine',       label: 'SINE' },
];

export default function Navbar({ activeTab, onNavigate }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  function navigate(id: TabId) {
    onNavigate(id);
    setMenuOpen(false);
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">
          <div className="nav-brand" onClick={() => navigate('quemsomos')}>
            <img src="/semee-symbol.png" alt="SEMEE" className="nav-brand-symbol" />
            <div className="nav-brand-text">
              <span className="nav-brand-name">SEMEE</span>
              <span className="nav-brand-sub">Empreendedorismo e Emprego</span>
            </div>
          </div>
          <div className="nav-menu">
            {tabs.map((t) => (
              <button
                key={t.id}
                className={activeTab === t.id ? 'active' : ''}
                onClick={() => navigate(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <button className="nav-cta" onClick={() => navigate('contato')}>
            Contato →
          </button>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-mobile-overlay" onClick={() => setMenuOpen(false)}>
          <div className="nav-mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="nav-mobile-header">
              <button
                className="nav-mobile-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
              <div className="nav-brand">
                <img src="/semee-symbol.png" alt="SEMEE" className="nav-brand-symbol" />
                <div className="nav-brand-text">
                  <span className="nav-brand-name">SEMEE</span>
                  <span className="nav-brand-sub">Empreendedorismo e Emprego</span>
                </div>
              </div>
            </div>
            <nav className="nav-mobile-links">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  className={activeTab === t.id ? 'active' : ''}
                  onClick={() => navigate(t.id)}
                >
                  {t.label}
                </button>
              ))}
              <button
                className={activeTab === 'contato' ? 'active' : ''}
                onClick={() => navigate('contato')}
              >
                Contato
              </button>
            </nav>
            <button className="nav-mobile-cta" onClick={() => navigate('contato')}>
              Fale com a SEMEE →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
