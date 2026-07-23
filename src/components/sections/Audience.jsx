import { audience } from '../../data/content.js';
import Icon from '../ui/Icon.jsx';
import useReveal from '../ui/useReveal.js';
import './Audience.css';

export default function Audience() {
  const ref = useReveal();

  return (
    <section className="audience" id="para-quem">
      <div className="container reveal" ref={ref}>
        <div className="section-head">
          <p className="eyebrow">{audience.eyebrow}</p>
          <h2 className="section-title">{audience.title}</h2>
        </div>

        <div className="audience__grid">
          {/* Card: quem atendemos */}
          <div className="audience__card audience__card--main">
            <h3>{audience.card.title}</h3>
            <p>{audience.card.description}</p>
            <ul>
              {audience.card.items.map((item) => (
                <li key={item}>
                  <Icon name="check" size={15} strokeWidth={2.4} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card: missão, visão e condução */}
          <div className="audience__card audience__card--pillars">
            {audience.pillars.map((pillar) => (
              <div className="pillar" key={pillar.label}>
                <span className="pillar__label">{pillar.label}</span>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
