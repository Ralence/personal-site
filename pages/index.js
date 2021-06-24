import Intro from "../components/intro";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Image from "next/image";
import themes from "../constants/themes";

export default function Home({ setTheme }) {
  return (
    <div>
      <Intro setTheme={setTheme} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
