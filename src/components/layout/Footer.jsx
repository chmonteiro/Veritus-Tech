import Logo from '../ui/Logo.jsx';
import { site } from '../../data/content.js';
import './Footer.css';

const footerLinks = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Processo', href: '#como-trabalhamos' },
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
    </footer>
  );
}
