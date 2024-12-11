import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Homesection from "./Components/Homesection";
import Portfolio from "./Components/Portfolio";

const siteProps = {
  name: "Isaac Brandon Datch",
  title: "Front-end developer",
  email: "isaacdutch472@gmail.com",
  gitHub: "Brandon-Isaac",
  instagram: "datch_err3r",
  linkedIn: "Isaac Datch",
  twitter: "ISAAC BRANDON DATCH",
};
const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";


export default function Home() {
  return (
    <div id="main">
      <Header />
      <Homesection name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer
        {...siteProps}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
    </div>
  );
}