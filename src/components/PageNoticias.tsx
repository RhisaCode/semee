import { useState } from 'react';
import { noticias } from '../data/noticias';
import type { NoticiaVideo } from '../data/noticias';

function VideoTile({ v }: { v: NoticiaVideo }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="conv-video">
        <video src={v.src} poster={v.poster} controls autoPlay playsInline preload="none" />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="conv-video"
      onClick={() => setPlaying(true)}
      aria-label={`Assistir vídeo: ${v.titulo}`}
    >
      <img src={v.poster} alt={v.titulo} loading="lazy" />
      <span className="conv-play" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </span>
      <span className="conv-video-cap">{v.titulo}</span>
    </button>
  );
}

export default function PageNoticias() {
  return (
    <div className="page active" id="page-noticias">
      <section className="section">
        <div className="container">
          <div className="section-eyebrow">Notícias</div>
          <h2>O que está acontecendo no empreendedorismo de Benjamin Constant.</h2>
          <p className="sub">Editais, cursos, feiras, prêmios e as ações da SEMEE. Esta página é atualizada pela equipe da Secretaria.</p>

          <div className="conv-list reveal">
            {noticias.map((n) => (
              <div className={`conv-item${n.videos ? ' conv-item--media' : ''}`} key={n.titulo}>
                <div className="conv-date">
                  <span className="conv-day">{n.dia}</span>
                  <span className="conv-month">{n.mes} · {n.ano}</span>
                </div>
                <div>
                  <div className="conv-h">{n.titulo}</div>
                  <div className="conv-p">{n.texto}</div>
                  {n.videos && (
                    <div className="conv-media">
                      {n.videos.map((v) => (
                        <VideoTile v={v} key={v.src} />
                      ))}
                    </div>
                  )}
                  {n.link && (
                    <a className="conv-link" href={n.link.href} target="_blank" rel="noopener noreferrer">
                      {n.link.label}
                    </a>
                  )}
                  <div className="conv-meta">{n.meta}</div>
                </div>
                <span className={`badge ${n.badge.cls}`}>{n.badge.label}</span>
              </div>
            ))}
          </div>

          <div className="painel-note reveal">
            Os vídeos desta página são produzidos pela equipe de comunicação da Prefeitura de Benjamin Constant e da SEMEE.
          </div>
        </div>
      </section>
    </div>
  );
}
