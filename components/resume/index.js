import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Resumetemplate = () => {
return (
  <div>
    <div className="resumewrapper">
      <div className="experience">
        <Experience />
      </div>
      <div className="otherexperience">
                <Education />
        <Skills />
      </div>
    </div>
  </div>
);
}
// Resumetemplate.getLayout = (page) => page;
export default Resumetemplate;