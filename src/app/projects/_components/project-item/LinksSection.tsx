import "./LinksSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface Links {
  github?: string;
  live?: string;
  extraText?: string;
}

interface LinksSectionProps {
  toggleSection: (sectionName: string) => void;
  section: string | null;
  links: Links;
}

const LinksSection = ({ toggleSection, section, links }: LinksSectionProps) => (
  <>
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
      <div className="open-section links-section-line">
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
              <h4>{links.extraText ?? "GitHub"}</h4>
            </a>
          </div>
        </div>
      </div>
    )}
  </>
);

export default LinksSection;
