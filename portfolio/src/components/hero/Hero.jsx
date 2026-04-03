import React from "react";
import "./hero.css";

import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="hero__section__container">
      <div className="hero__section__content">
        {/* <h1 className="hero__section__title">ሰላም, I'm ጋሽ ናደዉ እባላለዉ</h1> */}
        <h1 className="hero__section__title">ሰላም ፣ አቶ ነብዩ ናደዉ እባላለዉ!</h1>
        {/* <h1 className="hero__section__title">Hi, I'm Nebiyu Tesfaye Nadew</h1> */}
        <div className="hero__section__animation">
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              600,
              "React Developer",
              600,
              "NodeJS Developer",
              600,
              "Web App Builder",
              600,
            ]}
            speed={90}
            wrapper="span"
            deletionSpeed={65}
            repeat={Infinity}
            cursor={false}
          />
        </div>
        <p className="hero__section__description">
          A Full-Stack Software Engineer specializing in building secure,
          scalable, and user-focused web applications with React and Node.js.
        </p>
        <div className="hero__section__buttons">
          <button className="btn hero__section__btn_primary">
            View My Work
          </button>
          <button className="btn hero__section__btn_secondary">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
