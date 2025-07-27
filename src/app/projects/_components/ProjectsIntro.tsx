"use client";

import "./ProjectsIntro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { myAnimation } from "data/motion";

export const ProjectsIntro = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      viewport={{ once: true }}
      variants={myAnimation}
      className="projects-deco"
    >
      <div className="projects-title">
        <div className="projects-intro-icon">
          <FontAwesomeIcon icon={faDiagramProject} size="lg" />
        </div>
        <h1>Projects</h1>
      </div>
      <div className="projects-deco-div"></div>
    </motion.div>
  );
};
