import { hero } from '../../data/content.js';
import Icon, { WhatsAppIcon } from '../ui/Icon.jsx';
import { whatsappLink, externalLink } from '../../lib/whatsapp.js';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="grid-bg" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div>
          <p className="hero__badge">
            <i className="pulse" aria-hidden="true" />
            {hero.eyebrow}
          </p>

          <h1 className="hero__title">
            {hero.title} <span className="hero__title-accent">{hero.titleAccent}</span>
          </h1>

          <p className="hero__description">{hero.description}</p>

          <div className="hero__actions">
            <a {...externalLink} href={whatsappLink} className="btn btn--primary btn--lg">
              <WhatsAppIcon />
              {hero.ctaPrimary}
            </a>
            <a href="#solucoes" className="btn btn--ghost btn--lg">
              {hero.ctaSecondary}
            </a>
          </div>

          <p className="hero__reassure">
            <Icon name="check" size={15} strokeWidth={2.4} />
            {hero.reassurance}
          </p>

          <ul className="hero__trust">
            {hero.trust.map((item) => (
              <li key={item}>
                <Icon name="check" size={14} strokeWidth={2.4} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <HeroPanel />
      </div>
    </section>
  );
}

/**
 * Painel lateral: mostra, em forma de console, o ambiente que o cliente
 * passa a ter. É o elemento que diferencia a página de um template genérico.
 */
function HeroPanel() {
  const { panel } = hero;

  return (
    <aside className="panel" aria-label="Resumo do que é entregue">
      <div className="panel__bar">
        <span className="panel__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="panel__title">{panel.title}</span>
        <span className="panel__status">
          <i className="pulse" aria-hidden="true" />
          {panel.status}
        </span>
      </div>

      <div className="panel__body">
        {panel.lines.map((line) => (
          <div className="pline" key={line.title}>
            <span className="pline__ic" aria-hidden="true">
              <Icon name={line.icon} size={15} strokeWidth={2} />
            </span>
            <span className="pline__txt">
              <strong>{line.title}</strong>
              <small>{line.detail}</small>
            </span>
            <span className="pline__tag">{line.tag}</span>
          </div>
        ))}
      </div>

      <div className="panel__foot">
        <small>{panel.footLabel}</small>
        <strong>{panel.footValue}</strong>
      </div>
    </aside>
  );
}
