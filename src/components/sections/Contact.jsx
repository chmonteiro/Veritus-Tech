import { contact, site } from '../../data/content.js';
import useReveal from '../ui/useReveal.js';
import './Contact.css';

const whatsappLink = `https://wa.me/${site.whatsappNumber}`;

const channels = [
  {
    label: 'WhatsApp',
    value: site.whatsappDisplay,
    href: whatsappLink,
  },
  {
    label: 'E-mail',
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: 'Instagram',
    value: `@${site.instagram}`,
    href: `https://instagram.com/${site.instagram}`,
  },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section className="contact" id="contato">
      <div className="container reveal" ref={ref}>
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2 className="section-title">{contact.title}</h2>
        <p className="section-lead">{contact.lead}</p>

        <div className="contact__channels">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="channel"
            >
              <span className="channel__icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M6 8 L26 8 L16 26 Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                <small>{channel.label}</small>
                <strong>{channel.value}</strong>
              </span>
            </a>
          ))}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary contact__cta"
        >
          {contact.cta}
        </a>
      </div>
    </section>
  );
}
