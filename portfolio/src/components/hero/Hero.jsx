import React from "react";
import "./hero.css";

import { TypeAnimation } from "react-type-animation";

function Hero({ scrollToSection }) {
  return (
    <div className="hero__section__container">
      <div className="hero__section__content">
        <h1 className="hero__section__title">Hi, I'm Nebiyu Tesfaye Nadew</h1>
        <div className="hero__section__animation">
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              500,
              "React Developer",
              500,
              "NodeJS Developer",
              500,
              "Web App Builder",
              500,
            ]}
            speed={50}
            wrapper="span"
            deletionSpeed={50}
            repeat={Infinity}
            cursor={false}
            omitDeletionAnimation={false}
          />
        </div>
        <p className="hero__section__description">
          A Full-Stack Software Engineer specializing in building secure,
          scalable, and user-focused web applications with React and Node.js.
        </p>
        <div className="hero__section__buttons">
          <button
            className="btn hero__section__btn_primary"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </button>
          <button
            className="btn hero__section__btn_secondary"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
