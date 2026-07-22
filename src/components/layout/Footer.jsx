import Logo from '../ui/Logo.jsx';
import { site } from '../../data/content.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo size={22} />
        <p className="footer__tagline">{site.tagline}</p>
      </div>
    </footer>
  );
}
