import { useEffect } from 'react';
import { nav, navExtra, site } from '../../data/content.js';
import { whatsappLink, externalLink } from '../../lib/whatsapp.js';
import './MobileMenu.css';

/**
 * Menu mobile em tela cheia.
 * Renderizado FORA do <header> de propósito: o backdrop-filter do header
 * cria um containing block que quebra o position: fixed de elementos
 * internos e deixava o fundo transparente. Como componente independente,
 * o overlay cobre a tela inteira com fundo sólido garantido.
 *
 * Na vertical sobra espaço, então mostra os itens do menu desktop + os
 * que não coubessem na barra do topo (navExtra).
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
      id="mobile-menu"
      className={`mobile-menu ${open ? 'is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      aria-hidden={!open}
    >
      <nav className="mobile-menu__nav">
        {[...nav, ...navExtra].map((item) => (
          <a key={item.href} href={item.href} onClick={onClose}>
            {item.label}
          </a>
        ))}

        <a
          {...externalLink}
          href={whatsappLink}
          className="btn btn--primary"
          onClick={onClose}
        >
          Falar no WhatsApp
        </a>

        <p className="mobile-menu__foot">{site.whatsappDisplay}</p>
      </nav>
    </div>
  );
}
