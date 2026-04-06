import React from "react";
import "./footer.css";

import { socials } from "../../data/contactData";
import {
  FaHome,
  FaUser,
  FaPhoneAlt,
  FaTools,
  FaProjectDiagram,
} from "react-icons/fa";
import { MdMiscellaneousServices, MdContactMail } from "react-icons/md";

const navlinks = [
  { icon: <FaHome />, title: "Home" },
  { icon: <FaUser />, title: "About" },
  { icon: <FaTools />, title: "Skills" },
  { icon: <MdMiscellaneousServices />, title: "Services" },
  { icon: <FaProjectDiagram />, title: "Projects" },
  { icon: <FaPhoneAlt />, title: "Contact" },
];

function Footer({ scrollToSection }) {
  return (
    <footer className="footer__container">
      <div className="footer__top">
        {/* logo + tagline */}
        <div className="footer__brand">
          <h2 className="footer__logo">Nebiyu</h2>
          <p className="footer__tagline">
            Building clean, scalable, and user-focused web applications.
          </p>
        </div>

        {/* nav links */}
        <div className="footer__links">
          <h4 className="footer__links__title">Quick Links</h4>
          <ul className="footer__links__list">
            {navlinks.map((link) => (
              <li
                key={link.title}
                onClick={() => scrollToSection(link.title.toLowerCase())}
              >
                <a href={null} title={link.title}>
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* socials */}
        <div className="footer__socials">
          <h4 className="footer__socials__title">Find Me On</h4>
          <div className="footer__socials__icons">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer__social__icon"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/*   divider   */}
      <div className="footer__divider"></div>

      {/*   bottom   */}
      <div className="footer__bottom">
        <p className="footer__copy">
          © {new Date().getFullYear()} Nebiyu. All rights reserved.
        </p>
        <p className="footer__credit">
          Designed & Built by <span>Nebiyu.</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
