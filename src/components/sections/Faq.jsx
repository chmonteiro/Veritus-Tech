import { faq } from '../../data/content.js';
import useReveal from '../ui/useReveal.js';
import './Faq.css';

/**
 * Usa <details>/<summary> nativos: abre e fecha, responde ao teclado e
 * é anunciado corretamente por leitores de tela sem nenhum JavaScript.
 */
export default function Faq() {
  const ref = useReveal();

  return (
    <section className="faq" id="duvidas">
      <div className="container reveal" ref={ref}>
        <div className="section-head">
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2 className="section-title">{faq.title}</h2>
          <p className="section-lead">{faq.lead}</p>
        </div>

        <div className="faq__list">
          {faq.items.map((item, index) => (
            <details className="faq__item" key={item.question} open={index === 0}>
              <summary>
                {item.question}
                <span className="faq__sign" aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
