import Image from "next/image";
import "./IconCarusel.css";

const IconCarusel = () => {
  const icons = [
    { src: "/assets/icons/React.svg", alt: "React icon", title: "React" },
    { src: "/assets/icons/Next.js.svg", alt: "Nextjs icon", title: "Nextjs" },
    {
      src: "/assets/icons/TypeScript.svg",
      alt: "TypeScript icon",
      title: "TypeScript",
    },
    { src: "/assets/icons/Node.js.svg", alt: "Node icon", title: "Node" },
    { src: "/assets/icons/Bun.svg", alt: "Bun icon", title: "Bun" },
    { src: "/assets/icons/Express.svg", alt: "Express icon", title: "Express" },
    { src: "/assets/icons/MongoDB.svg", alt: "MongoDB icon", title: "MongoDB" },
    {
      src: "/assets/icons/PostgresSQL.svg",
      alt: "PostgreSQL icon",
      title: "PostgreSQL",
    },
    { src: "/assets/icons/Svelte.svg", alt: "Svelte icon", title: "Svelte" },
    { src: "/assets/icons/Rust.svg", alt: "Rust icon", title: "Rust" },
    { src: "/assets/icons/Docker.svg", alt: "Docker icon", title: "Docker" },
    { src: "/assets/icons/AWS.svg", alt: "AWS icon", title: "AWS" },
    { src: "/assets/icons/Redux.svg", alt: "Redux icon", title: "Redux" },
    { src: "/assets/icons/Jest.svg", alt: "Jest icon", title: "Jest" },
    {
      src: "/assets/icons/JavaScript.svg",
      alt: "JavaScript icon",
      title: "JavaScript",
    },
    { src: "/assets/icons/HTML5.svg", alt: "HTML5 icon", title: "HTML5" },
    { src: "/assets/icons/CSS3.svg", alt: "CSS3 icon", title: "CSS3" },
    {
      src: "/assets/icons/TailwindCSS.svg",
      alt: "TailwindCSS icon",
      title: "TailwindCSS",
    },
    { src: "/assets/icons/C.svg", alt: "C icon", title: "C" },
    { src: "/assets/icons/Bash.svg", alt: "Bash icon", title: "Bash" },
    { src: "/assets/icons/Git.svg", alt: "Git icon", title: "Git" },
  ];

  return (
    <div className="about-deco-box-carusel">
      <div className="about-deco-box-carusel-inner"></div>

      <div className="carousel-track">
        {[...icons, ...icons].map((icon, index) => (
          <Image
            key={index}
            height={48}
            width={48}
            src={icon.src}
            alt={icon.alt}
            title={icon.title}
          />
        ))}
      </div>
    </div>
  );
};

export default IconCarusel;
