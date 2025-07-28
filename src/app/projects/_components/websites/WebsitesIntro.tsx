"use client";

import "./WebsitesIntro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { myAnimation } from "data/motion";

export const WebsitesIntro = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      viewport={{ once: true }}
      variants={myAnimation}
      className="websites-deco"
    >
      <div className="websites-title">
        <div className="websites-intro-icon">
          <FontAwesomeIcon icon={faLink} size="lg" />
        </div>
        <h1>Websites</h1>
      </div>
      <div className="websites-deco-div"></div>
    </motion.div>
  );
};
