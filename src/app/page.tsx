import HeroSection from '@/components/HeroSection';
import WorkSection from '@/components/WorkSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />

      <hr className={styles.divider} />

      <section id="work">
        <h2 className={styles.sectionTitle}>Work</h2>
        <WorkSection />
      </section>

      <hr className={styles.divider} />

      <section id="projects">
        <h2 className={styles.sectionTitle}>Projects</h2>
        <ProjectsSection />
      </section>

      <ContactSection />
    </main>
  );
}
