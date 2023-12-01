import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const Projectss = () => {
  const projectsData = [
    {
      projectName: "Heart Of The Nile - Restaurant",
      techStack: ["JS", "React"],
      projectPic: "/images/hotn.png",
      tag: "p",
    },
    {
      projectName: "Hyperdealz",
      techStack: ["JS", "React"],
      projectPic: "/images/hotn.png",
      tag: "c",
    },
    {
      projectName: "Interview scheduler UI",
      techStack: ["JS", "React"],
      projectPic: "/images/hotn.png",
      tag: "c",
    },
    {
      projectName: "BAT$ Finance",
      techStack: ["JS", "React"],
      projectPic: "/images/hotn.png",
      tag: "p",
    },
  ];
  return (
    <div>
      <h1>Project Page</h1>
    </div>
  );
};

export default Projectss;
