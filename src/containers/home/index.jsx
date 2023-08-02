import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { Link } from "react-router-dom";
import {FaFacebookSquare,FaLinkedin,FaGithub} from "react-icons/fa"
import{SiLeetcode} from "react-icons/si"
import "./style.scss";

const Home = () => {
  const navigate = useNavigate();
  console.log(navigate);

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };
  const handleNavigateToResumePage = () => {
    window.open(
      "https://drive.google.com/file/d/1l319aI8ccGnSFxNH3bVpqfvJz40fayIK/view?usp=sharing"
    );
  };
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Sayan
          <br />
          Front end Developer
        </h1>
      </div>
      <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform : 'translateY(550px)'
      }}

      end={{
        transform: 'translateX(0px)'
      }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          <button onClick={handleNavigateToResumePage}>Download Cv</button>
        </div>
        <div className="home__contact-logo">
        <Link to={"https://www.facebook.com/sayanofficial2002"} className="home__contact-logo__icon">
               <FaFacebookSquare size={40}/>
          </Link>
          <Link to={"https://www.linkedin.com/in/sayan-chakraborty-06b4a1246/"} className="home__contact-logo__icon">
               <FaLinkedin size={40}/>
          </Link>
          <Link to={"https://github.com/sayan3456"} className="home__contact-logo__icon">
               <FaGithub size={40}/>
          </Link>
          <Link to={"https://leetcode.com/sayan3456/"} className="home__contact-logo__icon">
               <SiLeetcode size={40}/>
          </Link>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
