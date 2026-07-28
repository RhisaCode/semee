import { useEffect, useState } from 'react';
import { noticias } from '../data/noticias';

interface Props {
  onAbrir: (id: string) => void;
}

/** Quantas notícias entram no rodízio do banner. */
const QUANTAS = 5;
/** Tempo de cada notícia no banner, em ms. */
const INTERVALO = 6500;

const destaques = noticias.slice(0, QUANTAS);

function midia(n: (typeof destaques)[number]) {
  return n.imagem?.src ?? n.videos?.[0]?.poster;
}

export default function NewsBanner({ onAbrir }: Props) {
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    if (pausado) return;
    const relogio = setInterval(() => setIndice((i) => (i + 1) % destaques.length), INTERVALO);
    return () => clearInterval(relogio);
  }, [pausado]);

  const n = destaques[indice];
  const img = midia(n);

  return (
    <section
      className="news-hero"
      aria-label="Destaque de notícias da SEMEE"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
    >
      <div className="news-hero-inner" key={n.id}>
        <button type="button" className="news-hero-media" onClick={() => onAbrir(n.id)} aria-label={`Ler notícia: ${n.titulo}`}>
          {img ? (
            <img src={img} alt="" loading="eager" decoding="async" />
          ) : (
            <div className="news-hero-media-fallback" aria-hidden="true">
              <img src="/semee-symbol.png" alt="" />
            </div>
          )}
        </button>
        <div className="news-hero-content">
          <div className="news-hero-eyebrow">
            {indice === 0 ? 'Última notícia' : 'Em destaque'}
            <span className="news-hero-data">{n.dia} {n.mes} · {n.ano}</span>
            <span className={`badge ${n.badge.cls}`}>{n.badge.label}</span>
          </div>
          <h2 className="news-hero-titulo">
            <button type="button" onClick={() => onAbrir(n.id)}>{n.titulo}</button>
          </h2>
          <p className="news-hero-resumo">{n.texto}</p>
          <div className="news-hero-acoes">
            <button type="button" className="news-hero-cta" onClick={() => onAbrir(n.id)}>
              Ler a notícia completa →
            </button>
            <div className="news-hero-dots" role="tablist" aria-label="Escolher notícia em destaque">
              {destaques.map((d, i) => (
                <button
                  key={d.id}
                  type="button"
                  role="tab"
                  aria-selected={i === indice}
                  aria-label={`Notícia ${i + 1} de ${destaques.length}`}
                  className={`news-hero-dot${i === indice ? ' ativa' : ''}`}
                  onClick={() => setIndice(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
