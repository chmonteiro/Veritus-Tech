import { useState } from 'react';
import { about } from '../../data/content.js';
import useReveal from '../ui/useReveal.js';
import './About.css';

export default function About() {
  const ref = useReveal();
  const { founder } = about;

  /* Enquanto public/fundador.jpg não existir, a imagem falha ao carregar.
     Em vez de mostrar o ícone de imagem quebrada, escondemos o <img> e
     deixamos aparecer a silhueta de fallback desenhada em CSS. */
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className="about" id="quem-somos">
      <div className="container reveal" ref={ref}>
        <div className="section-head">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="section-title">{about.title}</h2>
        </div>

        <div className="about__summary">
          {about.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <figure className="founder">
          <div className="founder__photo">
            {!photoFailed && (
              <img
                src={founder.photo}
                alt={founder.photoAlt}
                width="180"
                height="180"
                loading="lazy"
                style={{
                  transformOrigin: founder.photoFocus,
                  '--photo-zoom': founder.photoZoom,
                }}
                onError={() => setPhotoFailed(true)}
              />
            )}
          </div>

          <figcaption className="founder__body">
            <span className="founder__role">{founder.role}</span>
            <h3>{founder.name}</h3>

            {founder.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <ul className="founder__tags">
              {founder.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
