import { useEffect, useState } from 'react';
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

interface Props {
  /** Slug vindo do link direto (#/noticia/<id>): rola até a matéria e a destaca. */
  focusId?: string | null;
}

export default function PageNoticias({ focusId }: Props) {
  useEffect(() => {
    if (!focusId) return;
    const alvo = document.getElementById(`noticia-${focusId}`);
    if (!alvo) return;
    alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // O que carrega depois (cartazes, pôsteres de vídeo, a faixa de últimas
    // notícias) muda a altura da página no meio da rolagem suave e a matéria
    // acaba parando por baixo do topo fixo. Uma correção depois que assenta
    // garante que quem chega pelo link direto veja o título, não o meio do texto.
    const corrigir = setTimeout(() => {
      alvo.scrollIntoView({ behavior: 'auto', block: 'start' });
    }, 700);
    return () => clearTimeout(corrigir);
  }, [focusId]);

  return (
    <div className="page active" id="page-noticias">
      <section className="section">
        <div className="container">
          <div className="section-eyebrow">Notícias</div>
          <h2>O que está acontecendo no empreendedorismo de Benjamin Constant.</h2>
          <p className="sub">Editais, cursos, feiras, prêmios e as ações da SEMEE. Esta página é atualizada pela equipe da Secretaria.</p>

          <div className="conv-list reveal">
            {noticias.map((n) => (
              <div
                className={`conv-item${n.videos || n.imagem ? ' conv-item--media' : ''}${n.id === focusId ? ' conv-item--focus' : ''}`}
                id={`noticia-${n.id}`}
                key={n.id}
              >
                <div className="conv-date">
                  <span className="conv-day">{n.dia}</span>
                  <span className="conv-month">{n.mes} · {n.ano}</span>
                </div>
                <div>
                  <div className="conv-h">{n.titulo}</div>
                  <div className="conv-p">{n.texto}</div>
                  {(n.imagem || n.videos) && (
                    <div className="conv-media">
                      {n.imagem && (
                        <a
                          className="conv-foto"
                          href={n.imagem.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={n.imagem.src} alt={n.imagem.alt} loading="lazy" />
                          <span className="conv-foto-cap">Ver cartaz em tamanho real →</span>
                        </a>
                      )}
                      {n.videos?.map((v) => (
                        <VideoTile v={v} key={v.src} />
                      ))}
                    </div>
                  )}
                  {n.links && n.links.length > 0 && (
                    <div className="conv-links">
                      {n.links.map((l) => (
                        <a className="conv-link" href={l.href} target="_blank" rel="noopener noreferrer" key={l.href}>
                          {l.label}
                        </a>
                      ))}
                    </div>
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
