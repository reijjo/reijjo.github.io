import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import {
  faLinkedin,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-content">
        <div className="footer-text">
          <p>© 2025 Teemu Aitomeri</p>
        </div>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/teemu-aitomeri/"
            target="_blank"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://github.com/reijjo" target="_blank" title="GitHub">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://gitlab.com/reijjo" target="_blank" title="GitLab">
            <FontAwesomeIcon icon={faGitlab} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};
