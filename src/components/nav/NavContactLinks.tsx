import "./NavContactLinks.css";

const dropdownLinks = [
  {
    href: "https://www.linkedin.com/in/teemu-aitomeri/",
    title: "LinkedIn",
    download: false,
  },
  {
    href: "https://github.com/reijjo",
    title: "GitHub",
    download: false,
  },
  {
    href: "https://gitlab.com/reijjo",
    title: "GitLab",
    download: false,
  },
  {
    href: "/files/CV_Aitomeri_Teemu.pdf",
    title: "Download CV",
    download: true,
  },
];

export default function NavContactLinks() {
  return (
    <div className="nav-link-wrapper contact-container">
      <div className="nav-link contact-dropdown">
        <span className="nav-line default">Contact</span>
        <span className="nav-line hover">Contact</span>
      </div>
      <div className="nav-dropdown">
        {dropdownLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            title={link.title}
            className="dropdown-item"
            download={link.download}
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
