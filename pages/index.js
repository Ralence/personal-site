import Intro from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { NextSeo } from "next-seo";

export default function Home({ setTheme }) {
  return (
    <>
      <NextSeo
        title="Ranko Ostojic - web developer"
        description="Ranko Ostojic is a front end web developer with extensive knowledge in creating SPAs with JavaScript, HTML and SCC especially proficient with React JS Library."
      />
      <Intro setTheme={setTheme} />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
