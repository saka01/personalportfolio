import Image from "next/image";
import RandomGreeting from "@/components/helper";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ResumeNav from "../components/ResumeNav";
import ProjectPage from "../components/projects";
import Skills from "@/components/resume/Skills";
import Experience from "@/components/resume/Experience";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <section className="home">
      <ResumeNav />
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <ProjectPage />
      </div>
    </section>
  );
}