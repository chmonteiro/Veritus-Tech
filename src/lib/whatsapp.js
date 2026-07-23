import { site } from '../data/content.js';

/**
 * Link do WhatsApp com a mensagem já preenchida.
 * Fica num só lugar porque o link aparece em 5 pontos da página
 * (header, hero, contato, CTA fixo e botão flutuante).
 */
export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

/** Props que todo link externo precisa repetir. */
export const externalLink = {
  target: '_blank',
  rel: 'noopener noreferrer',
};
