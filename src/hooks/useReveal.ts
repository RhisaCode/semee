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
      { threshold: 0.12 }
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
