import { useState, useEffect } from 'react';
import Icon, { WhatsAppIcon } from '../ui/Icon.jsx';
import { site } from '../../data/content.js';
import { whatsappLink, externalLink } from '../../lib/whatsapp.js';
import './StickyCta.css';

/**
 * Dois componentes de contato sempre à mão, um por faixa de tela:
 * - barra fixa no rodapé (celular e tablet), que sobe depois do hero
 * - botão redondo flutuante (desktop)
 * Qual dos dois aparece é decidido no CSS, pelo mesmo breakpoint do menu.
 */
export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  // Só aparece depois que o usuário passa do hero, que já tem o próprio CTA.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className={`sticky-cta ${visible ? 'is-visible' : ''}`}>
        <a {...externalLink} href={whatsappLink} className="btn btn--primary">
          <WhatsAppIcon size={16} />
          Falar no WhatsApp
        </a>
        <a
          href={`tel:+${site.whatsappNumber}`}
          className="btn btn--ghost"
          aria-label={`Ligar para a ${site.name}`}
        >
          <Icon name="phone" size={17} strokeWidth={2} />
        </a>
      </div>

      <a
        {...externalLink}
        href={whatsappLink}
        className="wa-float"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon size={27} />
      </a>
    </>
  );
}
