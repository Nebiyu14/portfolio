import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Loader from "./components/loader/Loader";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const html = document.documentElement;
    if (isDark)
      html.removeAttribute("data_theme"); //default dark mode
    else html.setAttribute("data_theme", "light"); //set light mode
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header
            isDark={isDark}
            toggleTheme={toggleTheme}
            scrollToSection={scrollToSection}
          />
          <section id="home">
            <Hero scrollToSection={scrollToSection} />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer scrollToSection={scrollToSection} />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;
