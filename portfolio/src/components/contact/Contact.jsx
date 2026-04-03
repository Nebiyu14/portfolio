import React, { useRef, useState } from "react";
import "./contact.css";

import emailjs from "@emailjs/browser";
import { contactInfo, socials } from "../../data/contactData";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      formRef.current.reset(); //clear the form
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="contact__section__container">
      {/* . header . */}
      <div className="contact__section__header">
        <h2 className="contact__section__title">Get In Touch</h2>
        <p className="contact__section__subtitle">
          I’m open to collaborations, projects, and career discussions.
        </p>
      </div>

      <div className="contact__section__content">
        {/* . left — contact info . */}
        <div className="contact__section__left">
          {/* contact cards */}
          <div className="contact__section__info__cards">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div className="contact__section__info__icon">
                    <Icon size={22} />
                  </div>
                  <div className="contact__section__info__text">
                    <span className="contact__section__info__label">
                      {item.label}
                    </span>
                    <span className="contact__section__info__value">
                      {item.value}
                    </span>
                  </div>
                </>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="contact__section__info__card"
                  target="_blank"
                  rel="noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className="contact__section__info__card">
                  {content}
                </div>
              );
            })}
          </div>

          {/* connect with me */}
          <div className="contact__section__connect">
            <h3 className="contact__section__connect__title">
              Connect With Me
            </h3>
            <div className="contact__section__socials">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact__section__social__icon"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* . right — form . */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact__section__form"
        >
          <div className="contact__section__form__row">
            <div className="contact__section__form__group">
              <label className="contact__section__required">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Abebe"
                required
              />
            </div>
            <div className="contact__section__form__group">
              <label className="contact__section__required">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="abebe@gmail.com"
                required
              />
            </div>
          </div>

          <div className="contact__section__form__group">
            <label className="contact__section__required">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Let’s talk about..."
              required
            />
          </div>

          <div className="contact__section__form__group">
            <label>Message</label>
            <textarea name="message" rows={5} placeholder="Tell me more..." />
          </div>

          <button
            type="submit"
            className="contact__section__btn"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="contact__section__feedback contact__section__feedback--success">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="contact__section__feedback contact__section__feedback--error">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
