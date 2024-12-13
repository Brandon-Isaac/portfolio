import image from "../../public/matrix.jpg";
import Image from "next/image";
import "./About.css";

const imageAltText = "matrix world background";
const description =
  "I'm a passionate and driven Computer Science student with a strong foundation in software development. Eager to apply my skills to innovative projects, contribute to cutting-edge technologies, and pursue a challenging role in Web3, AI development, or full-stack engineering.";

const skillsList = [
  "Front-end web development",
  "Mobile Application Programming",
  "User experience",
  "Database Management",
  "Graphics design",
];

const detailOrQuote =
  "The future belongs to those who embrace challenges as opportunities and persistently turn ideas into impactful solutions. ";

const About = () => {
  return (
    <section className="padding" id="about">
      <Image className="background" src={image} alt={imageAltText} />
      <div
        className="about"
      >
        <h2>About Datch</h2>
        <p>{description}</p>
        <hr />
        <h2>Skills</h2>
        <ul
          className="skills"
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <i style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</i>
      </div>
    </section>
  );
};

export default About;
