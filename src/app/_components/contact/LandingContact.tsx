import "./LandingContact.css";

export const LandingContact = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="glowing-cv-strings">
          <div className="glowing-cv">
            <a
              href="/files/CV_Aitomeri_Teemu.pdf"
              download
              className="download-cv-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
