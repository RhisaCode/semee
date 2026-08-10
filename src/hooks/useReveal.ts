import { useEffect } from 'react';

export function useReveal(dep?: unknown) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    els.forEach((el) => el.classList.remove('visible'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      // Gatilho por posição, não por proporção: um `threshold` de 12% nunca é
      // atingido por elementos mais altos que ~8 telas (a lista de notícias já
      // passa de 6.000px), e o bloco ficava invisível até o visitante rolar.
      // Com threshold 0 + margem negativa embaixo, revela quando o topo do
      // elemento entra na área útil da tela, seja ele curto ou comprido.
      { threshold: 0, rootMargin: '0px 0px -12% 0px' }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
        observer.observe(el);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [dep]);
}
