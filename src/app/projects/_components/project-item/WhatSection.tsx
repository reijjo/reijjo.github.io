import "./CommonSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface WhatSectionProps {
  toggleSection: (sectionName: string) => void;
  section: string | null;
  whatIs: string[];
}

const WhatSection = ({ toggleSection, section, whatIs }: WhatSectionProps) => {
  return (
    <>
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
    </>
  );
};

export default WhatSection;
