import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Section from "./components/layout/Section.jsx";
import Hero from "./components/sections/Hero.jsx";
import Projects from "./components/sections/Projects.jsx";
import Skills from "./components/sections/Skills.jsx";
import About from "./components/sections/About.jsx";
import Approach from "./components/sections/Approach.jsx";
import Contact from "./components/sections/Contact.jsx";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-paper text-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />

        <Section
          id="skills"
          eyebrow="Skills"
          title="Technical skills"
          description="The core technologies and tools I use to build full-stack applications."
        >
          <Skills />
        </Section>

        <Section
          id="projects"
          eyebrow="Work"
          title="Featured projects"
          description="Two full-stack applications built end to end, with a focus on secure APIs, clean data modeling, and reliable interfaces."
        >
          <Projects />
        </Section>

        <Section id="about" eyebrow="About" title="Background and focus">
          <About />
        </Section>

        <Section
          id="approach"
          eyebrow="Approach"
          title="Engineering approach"
          description="The principles I bring to every project, regardless of size."
        >
          <Approach />
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Get in touch"
          description="Available immediately. Open to roles in Chennai, Bengaluru, or Remote."
        >
          <Contact />
        </Section>
      </main>

      <Footer />
    </div>
  );
}

