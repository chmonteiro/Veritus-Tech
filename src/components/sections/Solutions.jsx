import { solutions } from '../../data/content.js';
import useReveal from '../ui/useReveal.js';
import './Solutions.css';

function CardIcon() {
  return (
    <span className="card__icon" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
        <path
          d="M6 8 L26 8 L16 26 Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Solutions() {
  const ref = useReveal();

  return (
    <section className="solutions" id="solucoes">
      <div className="container reveal" ref={ref}>
        <p className="eyebrow">{solutions.eyebrow}</p>
        <h2 className="section-title">{solutions.title}</h2>
        <p className="section-lead">{solutions.lead}</p>

        <div className="solutions__grid">
          {solutions.items.map((item) => (
            <article className="card" key={item.title}>
              <CardIcon />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
