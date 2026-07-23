import { process } from '../../data/content.js';
import useReveal from '../ui/useReveal.js';
import './Process.css';

export default function Process() {
  const ref = useReveal();

  return (
    <section className="process" id="como-trabalhamos">
      <div className="container reveal" ref={ref}>
        <div className="section-head">
          <p className="eyebrow">{process.eyebrow}</p>
          <h2 className="section-title">{process.title}</h2>
          <p className="section-lead">{process.lead}</p>
        </div>

        {/* Os números aqui são informação, não enfeite: a ordem das etapas
            é o que a seção comunica. */}
        <ol className="process__steps">
          {process.steps.map((step, index) => (
            <li className="step" key={step.title}>
              <span className="step__marker" aria-hidden="true">
                {index + 1}
              </span>
              <span className="step__label">Etapa {String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
