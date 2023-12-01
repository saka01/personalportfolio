import Education from "./Education";
import Experience from "./Experience";
import Summary from "./Summary";
import Techstack from "./Techstack";
import Skills from "./Skills";

const Resumetemplate = () => {
return (
  <div>
    <div class="resumewrapper">
      <div class="experience">
        <Experience />
      </div>
      <div class="otherexperience">
        <Summary />
        <Education />
        <Techstack />
        <Skills />
      </div>
    </div>
  </div>
);
}
Resumetemplate.getLayout = (page) => page;
export default Resumetemplate;