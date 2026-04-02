import React from "react";
import "./projects.css";

import { projectData } from "../../data/projectData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <div className="projects__section__container">
      <h2 className="projects__section__title">Projects</h2>

      <div className="projects__section__content">
        {projectData.map((project) => {
          const Icon = project.icon;

          return (
            <div className="projects__section__card" key={project.title}>
              {/* ── icon banner + overlay ── */}
              <div className="projects__section__image__wrapper">
                <div
                  className="projects__section__icon__banner"
                  style={{ backgroundColor: project.iconBg }}
                >
                  <Icon size={72} style={{ color: project.iconColor }} />
                </div>

                <div className="projects__section__overlay">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="projects__section__overlay__btn"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="projects__section__overlay__btn projects__section__overlay__btn--ghost"
                  >
                    <FaGithub size={14} />
                    GitHub
                  </a>
                </div>
              </div>

              {/* ── card body ── */}
              <div className="projects__section__body">
                <div className="projects__section__meta">
                  <h3 className="projects__section__card__title">
                    {project.title}
                  </h3>
                  <span className="projects__section__type">
                    {project.type}
                  </span>
                </div>

                <p className="projects__section__description">
                  {project.description}
                </p>

                <div className="projects__section__tech">
                  {project.tech.map((t) => (
                    <span className="projects__section__tech__badge" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
