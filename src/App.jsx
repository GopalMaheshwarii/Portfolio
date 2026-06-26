import Navbar    from './components/layout/Navbar';
import Footer    from './components/layout/Footer';
import Background from './components/ui/Background';
import Hero        from './components/sections/Hero';
import Projects    from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Skills      from './components/sections/Skills';
import About       from './components/sections/About';
import Education   from './components/sections/Education';
import Contact     from './components/sections/Contact';

export default function App() {
  return (
    <>
      {/* Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Background layers — z-0 (static) + z-10 (fluid) */}
      <Background />

      {/* Navbar — z-50, always on top */}
      <Navbar />

      {/* Content — z-20, pointer-events controlled per element */}
      <main
        id="main-content"
        className="relative z-20 pointer-events-none w-full"
      >
        <Hero />
        <Projects />
        <Achievements />
        <Skills />
        <About />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}