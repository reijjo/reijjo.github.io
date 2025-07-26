"use client";

import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav id="home" className={isHomePage ? "" : "nav-bg"}>
      <div className="nav-content">
        <div className="nav-links-wrapper">
          <Link
            href="/"
            className={pathname === "/" ? "nav-active" : "nav-link"}
          >
            <span className="nav-line default">Home</span>
            <span className="nav-line hover">Home</span>
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? "nav-active" : "nav-link"}
          >
            <span className="nav-line default">About</span>
            <span className="nav-line hover">About</span>
          </Link>
          <Link
            href="/projects"
            className={pathname === "/projects" ? "nav-active" : "nav-link"}
          >
            <span className="nav-line default">Projects</span>
            <span className="nav-line hover">Projects</span>
          </Link>
          <div className="nav-link-wrapper contact-container">
            <div className="nav-link contact-dropdown">
              <span className="nav-line default">Contact</span>
              <span className="nav-line hover">Contact</span>
            </div>
            <div className="nav-dropdown">
              <a
                href="https://www.linkedin.com/in/teemu-aitomeri/"
                target="_blank"
                title="LinkedIn"
                className="dropdown-item"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/reijjo"
                target="_blank"
                title="GitHub"
                className="dropdown-item"
              >
                GitHub
              </a>
              <a
                href="https://gitlab.com/reijjo"
                target="_blank"
                title="GitLab"
                className="dropdown-item"
              >
                GitLab
              </a>
              <a
                href="/files/CV_Aitomeri_Teemu.pdf"
                download
                className="dropdown-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
