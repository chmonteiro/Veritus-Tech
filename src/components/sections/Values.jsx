import { values, valuesSection } from '../../data/content.js';
import Icon from '../ui/Icon.jsx';
import useReveal from '../ui/useReveal.js';
import './Values.css';

/**
 * Seção "Nossos Valores". Substitui a antiga seção de processo: valor é
 * conjunto, não sequência, então são cards (sem numeração de etapas).
 * O valor marcado com `featured` em content.js vira o card de destaque em
 * largura cheia; os demais formam a grade.
 */
export default function Values() {
  const ref = useReveal();
  const featured = values.find((value) => value.featured);
  const rest = values.filter((value) => !value.featured);

  return (
    <section className="values" id="nossos-valores">
      <div className="container reveal" ref={ref}>
        <div className="section-head">
          <p className="eyebrow">{valuesSection.eyebrow}</p>
          <h2 className="section-title">{valuesSection.title}</h2>
          <p className="section-lead">{valuesSection.lead}</p>
        </div>

        {featured && (
          <article className="value value--featured">
            <span className="value__icon" aria-hidden="true">
              <Icon name={featured.icon} />
            </span>
            <div className="value__body">
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
            </div>
          </article>
        )}

        <div className="values__grid">
          {rest.map((value) => (
            <article className="value" key={value.title}>
              <span className="value__icon" aria-hidden="true">
                <Icon name={value.icon} />
              </span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
