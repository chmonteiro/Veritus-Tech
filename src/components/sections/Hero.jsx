import { hero, site } from '../../data/content.js';
import './Hero.css';

const whatsappLink = `https://wa.me/${site.whatsappNumber}`;

export default function Hero() {
  return (
    <section className="hero" id="topo">
      {/* Circuito decorativo (fundo) */}
      <svg
        className="hero__circuit"
        viewBox="0 0 400 300"
        aria-hidden="true"
        preserveAspectRatio="xMaxYMin meet"
      >
        <g stroke="currentColor" strokeWidth="1.5" fill="none">
          <path d="M400 40 H300 L260 80 H180" />
          <path d="M400 100 H320 L280 140 H220" />
          <path d="M340 0 V60 L300 100" />
          <circle cx="180" cy="80" r="4" fill="currentColor" />
          <circle cx="220" cy="140" r="4" fill="currentColor" />
          <circle cx="300" cy="100" r="4" fill="currentColor" />
        </g>
      </svg>

      <div className="container hero__inner">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__description">{hero.description}</p>

        <div className="hero__actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            {hero.ctaPrimary}
          </a>
          <a href="#solucoes" className="btn btn--ghost">
            {hero.ctaSecondary}
          </a>
        </div>

        <p className="hero__footnote">{hero.footnote}</p>
      </div>
    </section>
  );
}
