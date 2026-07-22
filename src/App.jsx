import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import ValuesMarquee from './components/sections/ValuesMarquee.jsx';
import Solutions from './components/sections/Solutions.jsx';
import Process from './components/sections/Process.jsx';
import Audience from './components/sections/Audience.jsx';
import Contact from './components/sections/Contact.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValuesMarquee />
        <Solutions />
        <Process />
        <Audience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
