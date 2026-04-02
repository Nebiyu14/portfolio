import React from "react";
import "./about.css";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import profileAvator from "../../assets/avatar_rectangualr.png";

function About() {
  return (
    <div className="about__section__container">
      <h2 className="about__section__title">About Me</h2>

      <div className="about__section__content">
        {/* left — text */}
        <div className="about__section__text">
          <p className="about__section__brief">
            I'm Nebiyu, a Full-Stack Software Engineer currently based in
            Warsaw, Poland. With an engineering background, I specialize in
            building robust, scalable, and user-focused web applications using
            the modern JavaScript ecosystem, particularly React and Node.js. I
            enjoy taking ideas from concept to deployment, developing end-to-end
            solutions.
          </p>

          <p className="about__section__brief">
            I’m detail-oriented and continuously working to improve my skills by
            learning new technologies and best practices. I adapt quickly to new
            tools and workflows, collaborate effectively with teams, and stay
            committed to delivering high-quality results on time. I’m always
            looking for opportunities to grow as a developer and deepen my
            expertise in web development.
          </p>
        </div>

        {/* right — image + socials */}
        <div className="about__section__right">
          <div className="about__section__image">
            <img src={profileAvator} alt="profile Image here" />
          </div>

          <div className="about__section__actions">
            <a
              href="https://linkedin.com/in/nebiyu-tesfaye"
              target="_blank"
              rel="noreferrer"
              className="about__section__icon"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/Nebiyu14"
              target="_blank"
              rel="noreferrer"
              className="about__section__icon"
            >
              <FaGithub size={22} />
            </a>
            <button
              className="about__section__btn__cv"
              disabled
              title="Button disabled temporarily"
            >
              <MdDownload size={20} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
