import styles from "./page.module.css";
import About from "./_components/About";
import Work from "./_components/Work";
import Education from "./_components/Education";

const AboutPage = () => {
  return (
    <main className={styles.aboutPage}>
      <About />
      <Work />
      <Education />
    </main>
  );
};

export default AboutPage;
