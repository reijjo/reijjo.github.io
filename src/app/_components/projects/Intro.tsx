import {
  faBriefcase,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "./Intro.css";

const ProjectIntro = () => (
  <div className="project-intro">
    <div className="project-intro-text">
      <div className="project-intro-icon">
        <FontAwesomeIcon icon={faBriefcase} size="lg" />
      </div>
      <div className="project-intro-titles">
        <h3>Projects</h3>
        <h4>Some of my latest projects</h4>
      </div>
    </div>
    <div className="project-intro-middle"></div>
    <div className="project-intro-last">
      <Link href="/projects" className="project-intro-link">
        <p>Check more on the projects page</p>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="link-icon"
        />
      </Link>
    </div>
  </div>
);

export default ProjectIntro;
