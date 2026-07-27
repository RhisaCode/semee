import { useEffect, useRef, useState } from 'react';
import type { TabId } from '../App';
import { manchetes } from '../data/noticias';

interface Props {
  onNavigate: (id: TabId) => void;
}

/** Ritmo da faixa, em pixels por segundo. */
const VELOCIDADE = 62;

export default function NewsTicker({ onNavigate }: Props) {
  const trilhaRef = useRef<HTMLDivElement>(null);
  const [duracao, setDuracao] = useState<string>();

  // A animação desloca a trilha em -50% (a lista é duplicada para o laço ficar
  // sem emenda). Medir metade da trilha e dividir pela velocidade mantém o
  // mesmo ritmo de leitura mesmo quando as miniaturas alargam os itens ou
  // quando entram novas manchetes.
  useEffect(() => {
    const trilha = trilhaRef.current;
    if (!trilha) return;

    const medir = () => {
      const ciclo = trilha.scrollWidth / 2;
      if (ciclo > 0) setDuracao(`${Math.round(ciclo / VELOCIDADE)}s`);
    };

    medir();
    const observador = new ResizeObserver(medir);
    observador.observe(trilha);
    return () => observador.disconnect();
  }, []);

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
      <span className="ticker-label">
        Últimas
        <span className="ticker-label-sub">notícias</span>
      </span>
      <div className="ticker-viewport">
        <div
          className="ticker-track"
          ref={trilhaRef}
          style={duracao ? { animationDuration: duracao } : undefined}
        >
          {[...manchetes, ...manchetes].map((m, i) => (
            <span className="ticker-item" key={i} aria-hidden={i >= manchetes.length}>
              {m.thumb && (
                <img className="ticker-thumb" src={m.thumb} alt="" decoding="async" />
              )}
              <span className="ticker-texto">{m.texto}</span>
              <span className="ticker-sep">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
