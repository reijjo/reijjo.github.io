import "./CommonSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface WhySectionProps {
  toggleSection: (sectionName: string) => void;
  section: string | null;
  why: string[];
}

const WhySection = ({ toggleSection, section, why }: WhySectionProps) => {
  return (
    <>
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
    </>
  );
};

export default WhySection;
