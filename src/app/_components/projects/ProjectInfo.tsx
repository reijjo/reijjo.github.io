"use client";

import Link from "next/link";
import Image from "next/image";
import { useIsMobile } from "../../hooks/useMediaQuery";
import "./ProjectInfo.css";

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
    <>
      <div className="tarpit-intro">
        <div className="tarpit-intro-text">
          <div className="tarpit-what">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="tarpit-tech">
            {techStack.map((tech) => (
              <div key={tech} className="tarpit-tech-item">
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div className="tarpit-images">
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
        </div>
      </div>
      {/* <div className="projects-divider-last"></div> */}
    </>
  );
};

export default ProjectInfo;
