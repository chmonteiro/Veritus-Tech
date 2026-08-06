import { useEffect, useRef, useState } from 'react';
import { values } from '../../data/content.js';
import './ValuesMarquee.css';

/* Velocidade visual do carrossel, em pixels por segundo. A duração da
   animação é calculada a partir dela, então a velocidade fica igual em
   qualquer largura de tela, independente de quantas cópias são geradas. */
const SPEED = 42;

export default function ValuesMarquee() {
  const sectionRef = useRef(null);
  const measureRef = useRef(null); // um conjunto oculto, só para medir a largura
  const [copies, setCopies] = useState(2);
  const [duration, setDuration] = useState(30);

  /* Mede a largura de um conjunto e da seção; repete o suficiente para
     preencher a viewport com folga (duas metades idênticas, para o loop
     ser sem emenda) e ajusta a duração para a velocidade constante.
     Refaz o cálculo quando a largura muda (ResizeObserver). */
  useEffect(() => {
    const section = sectionRef.current;
    const measure = measureRef.current;
    if (!section || !measure) return;

    const recompute = () => {
      const gap = parseFloat(getComputedStyle(measure).gap) || 0;
      // período = um conjunto + o gap até o próximo conjunto
      const period = measure.scrollWidth + gap;
      if (!period) return;

      const perHalf = Math.max(2, Math.ceil(section.clientWidth / period) + 1);
      setCopies(perHalf * 2);
      setDuration((perHalf * period) / SPEED);
    };

    recompute();
    const observer = new ResizeObserver(recompute);
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const loop = Array.from({ length: copies }, () => values).flat();

  return (
    <section className="marquee" aria-label="Valores da Veritus Tech" ref={sectionRef}>
      {/* Conjunto oculto de referência: existe só para medir a largura de
          um ciclo. Não entra no fluxo visível. */}
      <div className="marquee__measure" ref={measureRef} aria-hidden="true">
        {values.map((value) => (
          <MarqueeItem key={value.title} value={value} />
        ))}
      </div>

      <div className="marquee__track" style={{ '--marquee-duration': `${duration}s` }}>
        {loop.map((value, index) => (
          <MarqueeItem key={`${value.title}-${index}`} value={value} />
        ))}
      </div>
    </section>
  );
}

function MarqueeItem({ value }) {
  return (
    <div className="marquee__item">
      <div>
        <strong>{value.title}</strong>
        <span>{value.detail}</span>
      </div>
      <i className="marquee__dot" aria-hidden="true" />
    </div>
  );
}
