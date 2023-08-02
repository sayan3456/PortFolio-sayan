import React from "react";
import { Line } from "rc-progress";
import { GiSkills } from "react-icons/gi";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import PageHeaderContent from "../../component/pageHeaderContent";
import { skillsData } from "./utils";
import './style.scss';

const Skill = () => {
  return (
    <section id="skill" className="skill">
      <PageHeaderContent
        headerText="My Skills"
        icon={<GiSkills size={40} />}
      />
      <div className="skills__contant-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__contant-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills__contant-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div className="skills__contant-wrapper__inner-content__progressbar-container">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity : 1", "opacity : 0"]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={j}>
                      <p>{skillItem.skillName}</p>
                      <Line

                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        traiWidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skill;
