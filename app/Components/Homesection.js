import arrowSvg from "../../public/down-arrow.svg";
import Image from "next/image";
import PropTypes from "prop-types";
import image from "../../public/portfolio backgroud.png";
import "./Homesection.css";

const imageAltText = "Student going to school";

const Homesection = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <Image className="background" src={image} alt="" style={{ filter: "blur(6px) brightness(0.5)", }} />
      <div className="title">
        <h1>{name}</h1>
        <h2>{title}</h2>
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
