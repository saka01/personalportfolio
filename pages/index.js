import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ResumeNav from "../components/ResumeNav";
import ProjectPage from "../components/projects";
import Skills from "@/components/resume/Skills";
import Experience from "@/components/resume/Experience";
import Marquee from "react-fast-marquee";
import Education from "@/components/resume/Education";

export default function Home() {
  const languages = ["JavaScript", "Python", "Java", "C"];
  const frameworks = ["ReactJS", "NextJS", "NodeJS", "Django", "Flask"];
  const others = ["Git/GitHub", "Google Cloud", "MongoDB"];
  return (
    <section className="home">
      <ResumeNav />
      <div id="experience">
        {/* <Education /> */}
        {/* <Experience /> */}
      </div>
      <div id="projects">
        <ProjectPage />
      </div>
    </section>
  );
}
