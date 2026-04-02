import React from "react";
import "./services.css";

import serviceData from "../../data/serviceData";
import { MdDeveloperMode } from "react-icons/md";
import { FaDesktop, FaServer } from "react-icons/fa";
import { VscRocket } from "react-icons/vsc";

const serviceIcons = [
  MdDeveloperMode,
  FaDesktop,
  FaServer,
  VscRocket,
];

function Services() {
  return (
    <div className="services__section__container">

      <h2 className="services__section__title">Services</h2>

      <div className="services__section__content">
        {serviceData.map((service, index) => {
          const Icon = serviceIcons[index];

          return (
            <div className="services__section__card" key={service.title}>

              <div className="services__section__icon__wrapper">
                <Icon size={28} className="services__section__icon" />
              </div>

              <h3 className="services__section__card__title">
                {service.title}
              </h3>

              <p className="services__section__card__description">
                {service.description}
              </p>

              <div className="services__section__card__line" />

            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Services;