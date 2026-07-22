import { values } from '../../data/content.js';
import './ValuesMarquee.css';

export default function ValuesMarquee() {
  // Lista duplicada para o loop infinito ficar contínuo
  const loop = [...values, ...values];

  return (
    <section className="marquee" aria-label="Valores da Veritus Tech">
      <div className="marquee__track">
        {loop.map((value, index) => (
          <div className="marquee__item" key={`${value.title}-${index}`}>
            <div>
              <strong>{value.title}</strong>
              <span>{value.detail}</span>
            </div>
            <i className="marquee__dot" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
