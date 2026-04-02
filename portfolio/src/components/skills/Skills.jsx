import React from "react";
import "./skills.css";
import skillsData from "../../data/skillsData";

function Skills() {
  return (
    <div className="skills__section__container">
      <h2 className="skills__section__title">Skills</h2>

      <div className="skills__section__content">
        {skillsData.map((group) => (
          <div className="skills__section__card" key={group.category}>
            <h3 className="skills__section__category">{group.category}</h3>

            <div className="skills__section__items">
              {group.items.map((skill) => (
                <div className="skills__section__badge" key={skill.name}>
                  {/* icon on top */}
                  <skill.icon
                    size={22}
                    style={{ color: skill.color }}
                    className="skills__section__badge__icon"
                  />
                  {/* name below */}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
