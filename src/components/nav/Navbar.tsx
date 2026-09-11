"use client";

import "./Navbar.css";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import NavContactLinks from "./NavContactLinks";

export const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav id="home" className={isHomePage ? "" : "nav-bg"}>
      <div className="nav-content">
        <div className="nav-links-wrapper">
          <NavLink path="/" text="Home" />
          <NavLink path="/about" text="about" />
          <NavLink path="/projects" text="projects" />
          <NavContactLinks />
        </div>
      </div>
    </nav>
  );
};
