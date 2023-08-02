import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../component/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiJavascript1, DiHtml5, DiCss3, DiReact } from "react-icons/di";

const personalDetails = [
  {
    label: "Name",
    value: "Sayan Chakraborty",
  },
  {
    label: "Interest",
    value: "Frontend Developer",
  },
  {
    label: "Address",
    value: "Khragpur,West Bengal,India",
  },
  {
    label: "MOB",
    value: "+91-6297597726/7407719642",
  },
  {
    label: "Email",
    value: "plasmphotography@gmail.com",
  },
];

const jobSummary =
  "As a Frontend Developer, you will be responsible for crafting visually appealing and user-friendly web applications. Your primary focus will be on implementing responsive and interactive user interfaces, collaborating with the design and backend development teams to create seamless user experiences. This is an exciting opportunity for a fresh graduate with a passion for web development to join our dynamic team and contribute to the success of our digital projects.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">::</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
            <div>
            <DiJavascript1 size={60} color="var(--yellow-theme-main-color)" />
          </div>
          <div>
            <DiHtml5 size={60} color="var(--yellow-theme-main-color)" />
          </div>
          <div>
            <DiCss3 size={60} color="var(--yellow-theme-main-color)" />
          </div>
          <div>
            <DiReact size={60} color="var(--yellow-theme-main-color)" />
          </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
