"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Work.css";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { myAnimation, myAnimationDelay1, myAnimationDelay2 } from "data/motion";

const Work = () => {
  return (
    <section className="work-section">
      <div className="work-content">
        <motion.div
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
          variants={myAnimation}
          className="work-title"
        >
          <div className="work-intro-icon">
            <FontAwesomeIcon icon={faPersonDigging} size="lg" />
          </div>
          <h2>Work Experience</h2>
        </motion.div>
        <motion.div
          className="work-date"
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
          variants={myAnimationDelay1}
        >
          <h4>06/2024 - 11/2024</h4>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
          variants={myAnimationDelay2}
          className="work-description"
        >
          <div className="work-company">
            <h4>
              <span className="work-highlight">Software Developer Trainee</span>
              , Otava Oppimisen Palvelut
            </h4>
            <p>
              Developed a new learning material platform that is used in the
              production and use of Otava's digital learning materials
            </p>
            <ul className="work-list">
              <li>
                Working with React, TypeScript, Vanilla Extract, Storybook,
                CI/CD pipelines (GitHub Actions)
              </li>
              <li>Part of a four-person frontend Scrum Team</li>
              <li>Created multiple new layouts for drag-and-drop assignment</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
