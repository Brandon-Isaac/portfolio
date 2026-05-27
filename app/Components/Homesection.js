"use client";

import arrowSvg from "../../public/down-arrow.svg";
import Image from "next/image";
import PropTypes from "prop-types";
import image from "../../public/portfolio backgroud.png";
import "./Homesection.css";

const imageAltText = "Student going to school";

const Homesection = ({ name, title }) => {
  const description = "A Solution-oriented Software Developer and ICT Support professional experienced in backend systems, database management, API integrations, and enterprise application support. Skilled in Linux environments, SQL databases, REST APIs, cloud technologies, and troubleshooting real-time applications. Passionate about digital channels, financial technology, and delivering secure customer-focused systems.";
  
  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-height">
      <Image className="background" src={image} alt="" style={{ filter: "blur(6px) brightness(0.5)", }} />
      <div className="hero-content">
        <div className="title">
          <h1>{name}</h1>
          <p className="tagline">Software Developer | ICT Professional </p>
          <p className="bio">{description}</p>
          <div className="cta-buttons">
            <button className="cta-primary" onClick={scrollToPortfolio}>View My Work</button>
            <button className="cta-secondary" onClick={scrollToContact}>Let's Work Together</button>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <Image
          src={arrowSvg}
          style={{ height: "3rem", width: "3rem" }}
          alt={imageAltText}
        />
      </div>
    </section>
  );
};

Homesection.defaultProps = {
  name: "",
  title: "",
};

Homesection.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Homesection;
