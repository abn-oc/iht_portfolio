import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import WorkSection from '@/components/WorkSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <div className={styles.section}>
        <AboutSection />
      </div>
      <div className={styles.section}>
        <SkillsSection />
      </div>

      <section id="work" className={styles.section}>
        <h2 className={styles.sectionTitle}>Work</h2>
        <WorkSection />
      </section>

      <section id="projects" className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <ProjectsSection />
      </section>

      <ContactSection />
    </main>
  );
}
