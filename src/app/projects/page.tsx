import Projects from "./_components/Projects";
import styles from "./page.module.css";

const ProjectsPage = () => {
  return (
    <main className={styles.projectPage}>
      <Projects />
    </main>
  );
};

export default ProjectsPage;
