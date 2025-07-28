import "./TechSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface TechSectionProps {
  toggleSection: (sectionName: string) => void;
  section: string | null;
  stack: {
    frontend: string;
    backend: string;
    database: string;
    devops?: string;
    other: string;
  };
}

const TechSection = ({ toggleSection, section, stack }: TechSectionProps) => {
  return (
    <>
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
            {stack.backend && (
              <div className="backend-stack">
                <h4>Backend</h4>
                <p>{stack.backend}</p>
              </div>
            )}
            {stack.database && (
              <div className="database-stack">
                <h4>Database</h4>
                <p>{stack.database}</p>
              </div>
            )}
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
    </>
  );
};

export default TechSection;
