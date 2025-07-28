import { ProjectsIntro } from "./ProjectsIntro";
import "./Projects.css";
import MyProjects from "./MyProjects";
import { WebsitesIntro } from "./websites/WebsitesIntro";
import MyWebsites from "./websites/MyWebsites";

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-content">
        <ProjectsIntro />
        <MyProjects />
        <WebsitesIntro />
        <MyWebsites />
      </div>
    </section>
  );
};

export default Projects;
