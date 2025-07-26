import "./Projects.css";

import ProjectIntro from "./Intro";
import ProjectInfo from "./ProjectInfo";

export const Projects = () => {
  const sneakPeeks = [
    {
      id: "tarpit",
      title: "Tärpit",
      description: "Sports bet tracking made simple",
      techStack: [
        "React",
        "TypeScript",
        "Express.js",
        "CSS",
        "PostgreSQL",
        "Docker",
        "AWS",
      ],
      image: {
        desktop: "/assets/images/projects/tarpit/landing.png",
        mobile: "/assets/images/projects/tarpit/mobile2.png",
      },
      imageAlt: "Tärpit landing page",
    },
    {
      id: "yatzy",
      title: "Yatzy",
      description: "Classic dice game brought to the browser",
      techStack: ["React", "TypeScript", "Express.js", "CSS", "MongoDB"],
      image: {
        desktop: "/assets/images/projects/yatzy/yatzyDesk.png",
        mobile: "/assets/images/projects/yatzy/yatzyMob.png",
      },
      imageAlt: "Yatzy landing page",
    },
  ];

  return (
    <section className="projects">
      <div className="projects-content">
        <ProjectIntro />
        {sneakPeeks.map((project) => (
          <div key={project.id}>
            <ProjectInfo {...project} />
            <div className="projects-divider"></div>
          </div>
        ))}
      </div>
    </section>
  );
};
