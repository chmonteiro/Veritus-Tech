import { useState, useEffect } from 'react';
import Logo from '../ui/Logo.jsx';
import { WhatsAppIcon } from '../ui/Icon.jsx';
import MobileMenu from './MobileMenu.jsx';
import { nav } from '../../data/content.js';
import { whatsappLink, externalLink } from '../../lib/whatsapp.js';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');

  // Sombra sutil quando a página rola
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Acende na nav o link da seção que está na tela (scroll-spy).
  // A faixa -45%/-55% mira o miolo da viewport, então a troca acontece
  // quando a seção chega ao centro, não na borda.
  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const onScreen = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (onScreen[0]) setActiveId(onScreen[0].target.id);
      },
      { rootMargin: '-45% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <Logo />

          {/* Navegação desktop */}
          <nav className="header__nav" aria-label="Navegação principal">
            {nav.map((item) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`header__link ${isActive ? 'is-active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <a {...externalLink} href={whatsappLink} className="btn btn--primary header__cta">
            <WhatsAppIcon size={15} />
            Falar no WhatsApp
          </a>

          {/* Botão hamburguer (só mobile) */}
          <button
            className={`header__burger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
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
