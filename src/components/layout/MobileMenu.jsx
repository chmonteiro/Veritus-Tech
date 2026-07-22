import { useEffect } from 'react';
import { nav, site } from '../../data/content.js';
import './MobileMenu.css';

const whatsappLink = `https://wa.me/${site.whatsappNumber}`;

/**
 * Menu mobile em tela cheia.
 * Renderizado FORA do <header> de propósito: o backdrop-filter do header
 * cria um containing block que quebra o position: fixed de elementos
 * internos e deixava o fundo transparente. Como componente independente,
 * o overlay cobre a tela inteira com fundo sólido garantido.
 */
export default function MobileMenu({ open, onClose }) {
  // Trava o scroll da página enquanto o menu está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Fecha com a tecla Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div
      className={`mobile-menu ${open ? 'is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      aria-hidden={!open}
    >
      <nav className="mobile-menu__nav">
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={onClose}>
            {item.label}
          </a>
        ))}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
          onClick={onClose}
        >
          Falar no WhatsApp
        </a>
      </nav>
    </div>
  );
}
