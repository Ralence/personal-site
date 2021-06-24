import Intro from "../components/intro";
import About from "../components/About";
import Image from "next/image";
import themes from "../constants/themes";

export default function Home({ setTheme }) {
  return (
    <div>
      <Intro setTheme={setTheme} />
      <About />
    </div>
  );
}
