"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Education.css";
import { faLaptopFile } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { myAnimation, myAnimationDelay1, myAnimationDelay2 } from "data/motion";

const Education = () => {
  return (
    <section className="education-section">
      <div className="education-content">
        <motion.div
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
          variants={myAnimation}
          className="education-title"
        >
          <div className="education-intro-icon">
            <FontAwesomeIcon icon={faLaptopFile} size="lg" />
          </div>
          <h2>Education</h2>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
          variants={myAnimationDelay1}
          className="education-date"
        >
          <h4>10/2021 - 03/2023</h4>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
          variants={myAnimation}
          className="education-description"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
