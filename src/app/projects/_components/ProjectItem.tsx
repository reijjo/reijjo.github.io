import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./ProjectItem.css";
import "./ImageStack.css";
import Image from "next/image";
import ImageStack from "./ImageStack";

interface ProjectItemProps {
  logo: string;
  title: string;
  description: string;
  whatIs: string[];
  why: string[];
  challenges: string[];
  stack: {
    frontend: string;
    backend: string;
    database: string;
    devops: string;
    other: string;
  };
  links: {
    github: string;
    live?: string;
  };
  images: {
    desktop: string[];
    mobile: string[];
  };
}

const ProjectItem = ({
  logo,
  title,
  description,
  whatIs,
  why,
  challenges,
  stack,
  links,
  images,
}: ProjectItemProps) => {
  const [section, setSection] = useState<string | null>(null);

  const toggleSection = (sectionName: string) => {
    if (section === sectionName) {
      setSection(null);
    } else {
      setSection(sectionName);
    }
  };
  return (
    <section className="my-projects-section">
      <div className="my-projects-info">
        <div className="my-projects-title">
          <div className="my-projects-intro-icon">
            <Image src={logo} alt="Fish Icon" width={24} height={24} />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="my-project-stuff">
          <a className="stuff-what" onClick={() => toggleSection("what")}>
            <h4>What Is This?</h4>
            <button className="plus-button">
              <FontAwesomeIcon
                icon={section === "what" ? faMinus : faPlus}
                size="sm"
              />
            </button>
          </a>
          {section === "what" && (
            <div className="open-section what-section">
              <div className="open-section-text">
                {whatIs.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </div>
          )}
          <a className="stuff-making" onClick={() => toggleSection("making")}>
            <h4>Why I Built It?</h4>
            <button className="plus-button">
              <FontAwesomeIcon
                icon={section === "making" ? faMinus : faPlus}
                size="sm"
              />
            </button>
          </a>
          {section === "making" && (
            <div className="open-section making-section">
              <div className="open-section-text">
                {why.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </div>
          )}
          <a
            className="stuff-problems"
            onClick={() => toggleSection("problems")}
          >
            <h4>Challenges</h4>
            <button className="plus-button">
              <FontAwesomeIcon
                icon={section === "problems" ? faMinus : faPlus}
                size="sm"
              />
            </button>
          </a>
          {section === "problems" && (
            <div className="open-section problems-section">
              <ul className="problems-list">
                {challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}
          <a className="stuff-tools" onClick={() => toggleSection("tools")}>
            <h4>Tech Stack</h4>
            <button className="plus-button">
              <FontAwesomeIcon
                icon={section === "tools" ? faMinus : faPlus}
                size="sm"
              />
            </button>
          </a>
          {section === "tools" && (
            <div className="open-section tools-section">
              <div className="open-section-text">
                <div className="frontend-stack">
                  <h4>Frontend</h4>
                  <p>{stack.frontend}</p>
                </div>
                <div className="backend-stack">
                  <h4>Backend</h4>
                  <p>{stack.backend}</p>
                </div>
                <div className="database-stack">
                  <h4>Database</h4>
                  <p>{stack.database}</p>
                </div>
                {stack.devops && (
                  <div className="devops-stack">
                    <h4>DevOps</h4>
                    <p>{stack.devops}</p>
                  </div>
                )}
                <div className="other-stack">
                  <h4>Other</h4>
                  <p>{stack.other}</p>
                </div>
              </div>
            </div>
          )}
          <a className="stuff-links" onClick={() => toggleSection("links")}>
            <h4>Links</h4>
            <button className="plus-button">
              <FontAwesomeIcon
                icon={section === "links" ? faMinus : faPlus}
                size="sm"
              />
            </button>
          </a>
          {section === "links" && (
            <div className="open-section links-section">
              <div className="open-section-text links-section">
                {links.live && (
                  <div className="live-link">
                    <p>Try</p>
                    <a href={links.live} target="_blank">
                      <h4>Live App</h4>
                    </a>
                  </div>
                )}
                <div className="github-link">
                  <p>Check</p>
                  <a href={links.github} target="_blank">
                    <h4>GitHub</h4>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="my-projects-images-wrapper">
          <div className="my-projects-images">
            <ImageStack images={images.desktop} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectItem;
