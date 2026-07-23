import { solutions } from '../../data/content.js';
import Icon from '../ui/Icon.jsx';
import useReveal from '../ui/useReveal.js';
import './Solutions.css';

export default function Solutions() {
  const ref = useReveal();

  /* O brilho acompanha o cursor: guarda a posição em variáveis CSS
     para o ::after do cartão desenhar o gradiente no lugar certo. */
  const followPointer = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <section className="solutions" id="solucoes">
      <div className="grid-bg" aria-hidden="true" />

      <div className="container reveal" ref={ref}>
        <div className="section-head">
          <p className="eyebrow">{solutions.eyebrow}</p>
          <h2 className="section-title">{solutions.title}</h2>
          <p className="section-lead">{solutions.lead}</p>
        </div>

        <div className="solutions__grid">
          {solutions.items.map((item) => (
            <article
              className={`card ${item.wide ? 'card--wide' : ''}`}
              key={item.title}
              onPointerMove={followPointer}
            >
              <div className="card__top">
                <span className="card__icon" aria-hidden="true">
                  <Icon name={item.icon} />
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
