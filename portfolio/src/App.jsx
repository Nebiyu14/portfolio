import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

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
        <Hero />
      </div>
    </>
  );
}

export default App;
