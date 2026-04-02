import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Notice from "./components/notice/Notice";

function App() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const html = document.documentElement;
    if (isDark)
      html.removeAttribute("data_theme"); //default dark mode
    else html.setAttribute("data_theme", "light"); //set light mode
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <>
      <div>
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <Notice/>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
      </div>
    </>
  );
}

export default App;
