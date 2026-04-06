import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo/logo_handwriiten.jpg";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Header({ isDark, toggleTheme, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false); //for mobile view
  };
  return (
    <div className="header__section__container">
      {/* logo */}
      <div
        className="header__section__logo"
        onClick={() => scrollToSection("home")}
      >
        <Link to={"/"}>Nebiyu</Link>
      </div>
      <div>
        {/* navlinks */}
        <div
          className={`header__section__navlinks ${isMenuOpen ? "show_navlinks" : ""}`}
        >
          <ul>
            <li onClick={() => handleNavClick("home")}>Home</li>
            <li onClick={() => handleNavClick("about")}>About</li>
            <li onClick={() => handleNavClick("skills")}>Skills</li>
            <li onClick={() => handleNavClick("services")}>Services</li>
            <li onClick={() => handleNavClick("projects")}>Projects</li>
            <li onClick={() => handleNavClick("contact")}>Contact</li>
          </ul>
        </div>
      </div>
      {/* icons */}
      <div className="header__section__icons header__section__social__media">
        <a
          href={"https://linkedin.com/in/nebiyu-tesfaye"}
          target="_blank"
          title="Contact via Linkedin"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} className="header__section_single_icon" />
        </a>

        <a
          href={"https://github.com/Nebiyu14"}
          target="_blank"
          title="Visit Github"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} className="header__section_single_icon" />
        </a>
        <span
          className="header__section_single_icon"
          onClick={toggleTheme}
          title={`${isDark ? "switch to light mode" : "switch to dark mode"}`}
        >
          {isDark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
        </span>
        <span
          className="header__section_single_icon header__section__hamburger"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <RxCross2 size={20} /> : <GiHamburgerMenu size={20} />}
        </span>
      </div>
    </div>
  );
}

export default Header;
