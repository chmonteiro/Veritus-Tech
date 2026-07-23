import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import StickyCta from './components/layout/StickyCta.jsx';
import Hero from './components/sections/Hero.jsx';
import ValuesMarquee from './components/sections/ValuesMarquee.jsx';
import Solutions from './components/sections/Solutions.jsx';
import Process from './components/sections/Process.jsx';
import About from './components/sections/About.jsx';
import Audience from './components/sections/Audience.jsx';
import Faq from './components/sections/Faq.jsx';
import Contact from './components/sections/Contact.jsx';

/* A ordem conta a história: o que fazemos, como fazemos, quem somos,
   para quem, dúvidas e por fim o contato. Os fundos das seções alternam
   nessa mesma sequência, então mover uma seção pede conferir as cores. */
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValuesMarquee />
        <Solutions />
        <Process />
        <About />
        <Audience />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
