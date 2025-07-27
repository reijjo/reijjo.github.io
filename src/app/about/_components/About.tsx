"use client";

import "./AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowman } from "@fortawesome/free-solid-svg-icons";
import IconCarusel from "./IconCarusel";
import { motion } from "motion/react";
import {
  myAnimation,
  myAnimationDelay1,
  myAnimationDelay2,
  myAnimationDelay3,
} from "data/motion";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-deco">
          <div className="about-me-text">
            <motion.div
              initial="initial"
              whileInView="inView"
              viewport={{ once: true }}
              variants={myAnimation}
              className="about-me-title"
            >
              <div className="about-intro-icon">
                <FontAwesomeIcon icon={faSnowman} size="lg" />
              </div>
              <h1>About Me</h1>
            </motion.div>
            <motion.p
              initial="initial"
              whileInView="inView"
              viewport={{ once: true }}
              variants={myAnimationDelay1}
            >
              Back in the early 2000s, I was really into computers. Well, mostly
              I just played Unreal Tournament and Diablo II — but I also built
              my first simple website. I never imagined this could become a
              career, but thanks to <span>Hive Helsinki</span>, I can now
              proudly call myself a<span> Full Stack Developer</span> —
              something I’ve secretly always wanted.
            </motion.p>
            <motion.p
              initial="initial"
              whileInView="inView"
              viewport={{ once: true }}
              variants={myAnimationDelay2}
            >
              These days, I focus on building projects with <span>React</span>,{" "}
              <span>TypeScript</span>, <span>Node</span> (or <span>Bun</span>
              ), and <span>Express</span>, using <span>MongoDB</span> or{" "}
              <span>PostgreSQL</span> depending on the needs of the project.
              Recently, I’ve been diving into <span>SvelteKit</span> and{" "}
              <span>Rust</span> through small side projects — mostly to stay
              sharp and keep learning new things.
            </motion.p>
            <motion.p
              initial="initial"
              whileInView="inView"
              viewport={{ once: true }}
              variants={myAnimationDelay3}
            >
              When I'm not doing my nerdy stuff, I'm probably playing basketball
              or doing some yoga.
            </motion.p>
          </div>
          <IconCarusel />
        </div>
      </div>
    </section>
  );
};

export default About;
