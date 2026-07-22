import { useState, useEffect } from 'react';
import Logo from '../ui/Logo.jsx';
import MobileMenu from './MobileMenu.jsx';
import { nav, site } from '../../data/content.js';
import './Header.css';

const whatsappLink = `https://wa.me/${site.whatsappNumber}`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sombra sutil quando a página rola
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <Logo />

          {/* Navegação desktop */}
          <nav className="header__nav" aria-label="Navegação principal">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="header__link">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary header__cta"
          >
            Falar no WhatsApp
          </a>

          {/* Botão hamburguer (só mobile) */}
          <button
            className={`header__burger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Menu mobile fica FORA do header: o backdrop-filter do header
          quebrava o position: fixed e deixava o fundo transparente */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
