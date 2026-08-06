import Logo from '../ui/Logo.jsx';
import { site, seo } from '../../data/content.js';
import './Footer.css';

const footerLinks = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Valores', href: '#nossos-valores' },
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo size={16} markSize={30} />

        <nav className="footer__links" aria-label="Links do rodapé">
          {footerLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <p className="footer__tagline">{site.tagline}</p>
      </div>

      {/* Bloco de SEO: discreto de propósito. É conteúdo real e rastreável
          (perfil da empresa, serviços, área e contato) que reforça as
          palavras-chave sem poluir o visual para o visitante. */}
      <div className="container">
        <details className="seo">
          <summary className="seo__toggle">{seo.label}</summary>

          <div className="seo__panel">
            <h2 className="seo__heading">{seo.heading}</h2>
            <p className="seo__text">{seo.description}</p>

            <dl className="seo__facts">
              <div>
                <dt>Serviços</dt>
                <dd>{seo.services.join(' · ')}</dd>
              </div>
              <div>
                <dt>Atendimento</dt>
                <dd>{seo.coverage}</dd>
              </div>
              <div>
                <dt>Contato</dt>
                <dd>
                  {site.name} · {seo.region} ·{' '}
                  <a href={`https://wa.me/${site.whatsappNumber}`}>{site.whatsappDisplay}</a> ·{' '}
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
            </dl>
          </div>
        </details>
      </div>
    </footer>
  );
}
