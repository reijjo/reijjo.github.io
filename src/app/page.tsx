import { LandingContact } from "./_components/contact/LandingContact";
import { Hero } from "./_components/hero/Hero";
import { Projects } from "./_components/projects/Projects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.homeBg}>
      <Hero />
      <Projects />
      <LandingContact />
    </main>
  );
}
