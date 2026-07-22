import { useEffect, useRef } from 'react';

/**
 * Adiciona a classe .is-visible quando o elemento entra na tela.
 * Uso: const ref = useReveal(); <div ref={ref} className="reveal">...</div>
 */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
