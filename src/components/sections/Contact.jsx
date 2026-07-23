import { contact, site } from '../../data/content.js';
import Icon, { WhatsAppIcon } from '../ui/Icon.jsx';
import { whatsappLink, externalLink } from '../../lib/whatsapp.js';
import useReveal from '../ui/useReveal.js';
import './Contact.css';

const channels = [
  { label: 'WhatsApp', value: site.whatsappDisplay, href: whatsappLink, icon: 'whatsapp' },
  { label: 'E-mail', value: site.email, href: `mailto:${site.email}`, icon: 'mail' },
  {
    label: 'Instagram',
    value: `@${site.instagram}`,
    href: `https://instagram.com/${site.instagram}`,
    icon: 'instagram',
  },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section className="contact" id="contato">
      <div className="noise" aria-hidden="true" />

      <div className="container">
        <div className="contact__card reveal" ref={ref}>
          <div className="contact__inner">
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2 className="contact__title">{contact.title}</h2>
            <p className="section-lead">{contact.lead}</p>

            <div className="contact__actions">
              <a {...externalLink} href={whatsappLink} className="btn btn--primary btn--lg">
                <WhatsAppIcon />
                {contact.cta}
              </a>
              <p className="contact__note">
                <Icon name="clock" size={15} strokeWidth={2} />
                {contact.note}
              </p>
            </div>

            <div className="contact__channels">
              {channels.map((channel) => (
                <a key={channel.label} {...externalLink} href={channel.href} className="channel">
                  <span className="channel__icon" aria-hidden="true">
                    {channel.icon === 'whatsapp' ? (
                      <WhatsAppIcon size={16} />
                    ) : (
                      <Icon name={channel.icon} size={16} strokeWidth={2} />
                    )}
                  </span>
                  <span>
                    <small>{channel.label}</small>
                    <strong>{channel.value}</strong>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
