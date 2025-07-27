import "./ChallengesSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface ChallengesSectionProps {
  toggleSection: (sectionName: string) => void;
  section: string | null;
  challenges: string[];
}

const ChallengesSection = ({
  toggleSection,
  section,
  challenges,
}: ChallengesSectionProps) => {
  return (
    <>
      <a className="stuff-problems" onClick={() => toggleSection("problems")}>
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
    </>
  );
};

export default ChallengesSection;
