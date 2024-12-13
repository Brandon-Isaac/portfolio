import image from "../../public/studying.jpg";
import Image from "next/image";
import "./Portfolio.css";

const imageAltText = "student coding";
const projectList = [
  {
    title: "Bursary Buddy ",
    description: "an innovative AI-powered system designed to revolutionize the bursary allocation process by ensuring equitable and efficient distribution of financial aid to students in need",
    url: "",
  },
  {
    title: "Building Bridges ",
    description:
      "A platform designed to bridge the gap between university students and the industry.",
    url: "",
  },
  {
    title: "Vroom Vibe Dealership",
    description: "A React-based application for browsing, searching, and purchasing vehicles. It provides detailed car information, allows user accounts, and integrates a payment gateway.",
    url: "",
  },
  {
    title: "Instagram Profile Roaster",
    description: "Instagram Profile Roaster is a web application that generates humorous and lighthearted 'roasts' of Instagram profiles using OpenAI's GPT-3.5 model.",
    url: "",
  },
  {
  title: "Fanya: A TODO app",
  description:
    "an Android application project designed to help users efficiently organize their tasks and improve productivity.",
  url: "",
},
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio">
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <Image
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project,index) =>{
            console.log(project)
            return(
            <div className="box" key={index}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          )
}
)}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
