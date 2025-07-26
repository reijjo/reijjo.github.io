import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Education.css";
import { faLaptopCode, faLaptopFile } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <section className="education-section">
      <div className="education-content">
        <div className="education-title">
          <div className="education-intro-icon">
            <FontAwesomeIcon icon={faLaptopFile} size="lg" />
          </div>
          <h2>Education</h2>
        </div>
        <div className="education-date">
          <h4>10/2021 - 03/2023</h4>
        </div>
        <div className="education-description">
          <div className="education-institution">
            <h4>
              <a href="https://www.hive.fi/en/" target="_blank">
                Hive Helsinki
              </a>
            </h4>
            <p>
              Project-based education with an emphasis on peer-to-peer learning.
              Developed knowledge and skills through self-study, online
              resources, and collaboration with peers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
