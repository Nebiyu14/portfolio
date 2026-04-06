import React, { useState, useEffect } from "react";
import "./scrollToTop.css";

import { GoArrowUp } from "react-icons/go";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll__to__top ${visible ? "scroll__to__top__visible" : ""}`}
      onClick={scrollToTop}
    >
      <GoArrowUp size={24} />
    </button>
  );
}

export default ScrollToTop;
