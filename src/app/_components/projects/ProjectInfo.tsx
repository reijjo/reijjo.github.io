"use client";

import Link from "next/link";
import Image from "next/image";
import { useIsMobile } from "../../hooks/useMediaQuery";
import "./ProjectInfo.css";
import { motion } from "motion/react";
import {
  myAnimation,
  myAnimationDelay1,
  myAnimationDelay2,
  myAnimationDelay3,
} from "data/motion";

interface ProjectInfoProps {
  title: string;
  description: string;
  techStack: string[];
  image: { desktop: string; mobile: string };
  imageAlt: string;
}

const ProjectInfo = ({
  title,
  description,
  techStack,
  image,
  imageAlt,
}: ProjectInfoProps) => {
  const isMobile = useIsMobile();
  const imageSrc = isMobile ? image.mobile : image.desktop;

  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      viewport={{ once: true }}
      variants={myAnimation}
      className="tarpit-intro"
    >
      <div className="tarpit-intro-text">
        <motion.div
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
          variants={myAnimationDelay1}
          className="tarpit-what"
        >
          <h3>{title}</h3>
          <p>{description}</p>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
          variants={myAnimationDelay2}
          className="tarpit-tech"
        >
          {techStack.map((tech) => (
            <div key={tech} className="tarpit-tech-item">
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial="initial"
        whileInView="inView"
        viewport={{ once: true }}
        variants={myAnimationDelay3}
        className="tarpit-images"
      >
        <Link href="/projects" className="tarpit-image-container">
          <div className="project-image">
            <Image
              className="project-pic"
              src={imageSrc}
              alt={imageAlt}
              title={imageAlt}
              sizes="100vw"
              priority
              fill
            />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectInfo;
