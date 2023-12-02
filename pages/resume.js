import ResumeNav from "../components/ResumeNav";
import Resumetemplate from "../components/resume/index";

const Resume = () => {
    return (
        <div className="resumetemplate">
            <ResumeNav />
            <Resumetemplate />
        </div>
    );
}
// Resume.getLayout = (page) => page;

export default Resume;