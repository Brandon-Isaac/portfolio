import image from "../../public/studying.jpg";
import Image from "next/image";
import "./Portfolio.css";

const imageAltText = "student coding";
const projectList = [
  {
    title:"EmployBridge",
    description:"A comprehensive AI-powered job matching platform that connects job seekers with employers through intelligent skill-based matching and career development tools.",
    url:"https://employ-bridge.vercel.app/",
},
  {
    title: "Bursary Buddy ",
    description: "an innovative AI-powered system designed to revolutionize the bursary allocation process by ensuring equitable and efficient distribution of financial aid to students in need",
    url: "https://bursary-buddy-seven.vercel.app/",
  },
  {
    title: "Campus Connect",
    description:
      "A platform designed to bridge the gap between university students and the industry.",
    url: "https://campus-connect-navy-six.vercel.app/",
  },
  {
    title: "Eco Alert",
    description: "An environment conservation application that monitors where environmental cases have occurred and informs nearby users in real-time. Built with React Native and Expo for cross-platform mobile deployment.",
    url: "https://ecolert.netlify.app/",
  },
  {
    title: "Surgery Status",
    description: "Real-time monitoring application for surgery schedules that keeps medical staff and patients informed with live updates. Built with Next.js for a robust and scalable solution.",
    url: "https://v56-tier3-team-32main.vercel.app/",
  },
  {
  title: "Fanya: A TODO app",
  description:
    "a Next.js application designed to help users efficiently organize their tasks and improve productivity.",
  url: "https://fanya-sigma.vercel.app/",
},
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio">
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
