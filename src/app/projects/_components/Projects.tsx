import { ProjectsIntro } from "./ProjectsIntro";
import "./Projects.css";
import MyProjects from "./MyProjects";

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-content">
        <ProjectsIntro />
        <MyProjects />
      </div>
    </section>
  );
};

export default Projects;
