import "./ProjectItem.css";
import "./ImageStack.css";
import { useState } from "react";
import { motion } from "motion/react";
import { myAnimation } from "data/motion";
import ImageStack from "./ImageStack";
import ItemTitle from "./project-item/ItemTitle";
import WhatSection from "./project-item/WhatSection";
import WhySection from "./project-item/WhySection";
import ChallengesSection from "./project-item/ChallengesSection";
import TechSection from "./project-item/TechSection";
import LinksSection from "./project-item/LinksSection";

interface ProjectItemProps {
  logo: string;
  title: string;
  description: string;
  whatIs: string[];
  why: string[];
  challenges: string[];
  stack: {
    frontend: string;
    backend: string;
    database: string;
    devops: string;
    other: string;
  };
  links: {
    github: string;
    live?: string;
  };
  images: {
    desktop: string[];
    mobile: string[];
  };
}

const ProjectItem = ({
  logo,
  title,
  description,
  whatIs,
  why,
  challenges,
  stack,
  links,
  images,
}: ProjectItemProps) => {
  const [section, setSection] = useState<string | null>(null);

  const toggleSection = (sectionName: string) => {
    if (section === sectionName) {
      setSection(null);
    } else {
      setSection(sectionName);
    }
  };
  return (
    <section className="my-projects-section">
      <div className="my-projects-info">
        <ItemTitle logo={logo} title={title} description={description} />
        <motion.div
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
          variants={myAnimation}
          className="my-project-stuff"
        >
          <WhatSection
            toggleSection={toggleSection}
            section={section}
            whatIs={whatIs}
          />
          <WhySection
            toggleSection={toggleSection}
            section={section}
            why={why}
          />
          <ChallengesSection
            toggleSection={toggleSection}
            section={section}
            challenges={challenges}
          />
          <TechSection
            toggleSection={toggleSection}
            section={section}
            stack={stack}
          />
          <LinksSection
            toggleSection={toggleSection}
            section={section}
            links={links}
          />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
          variants={myAnimation}
          className="my-projects-images-wrapper"
        >
          <div className="my-projects-images">
            <ImageStack images={images.desktop} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectItem;
