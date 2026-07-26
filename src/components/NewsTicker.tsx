import type { TabId } from '../App';
import { manchetes } from '../data/noticias';

interface Props {
  onNavigate: (id: TabId) => void;
}

export default function NewsTicker({ onNavigate }: Props) {
  const duracao = `${manchetes.length * 8}s`;

  return (
    <div
      className="news-ticker"
      role="button"
      tabIndex={0}
      aria-label="Últimas notícias da SEMEE — abrir página de notícias"
      onClick={() => onNavigate('noticias')}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onNavigate('noticias');
      }}
    >
      <span className="ticker-label">Últimas</span>
      <div className="ticker-viewport">
        <div className="ticker-track" style={{ animationDuration: duracao }}>
          {[...manchetes, ...manchetes].map((m, i) => (
            <span className="ticker-item" key={i} aria-hidden={i >= manchetes.length}>
              {m}
              <span className="ticker-sep">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
