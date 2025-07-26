import "./ProjectsIntro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";

export const ProjectsIntro = () => {
  return (
    <div className="projects-deco">
      <div className="projects-title">
        <div className="projects-intro-icon">
          <FontAwesomeIcon icon={faDiagramProject} size="lg" />
        </div>
        <h1>Projects</h1>
      </div>
      <div className="projects-deco-div"></div>
    </div>
  );
};
