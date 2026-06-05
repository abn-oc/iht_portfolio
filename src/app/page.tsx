import HeaderSection from '@/components/HeaderSection';
import WorkSection from '@/components/WorkSection';
import ProjectsSection from '@/components/ProjectsSection';
import WritingSection from '@/components/WritingSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderSection />

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

      <hr className={styles.divider} />

      <section id="writing">
        <h2 className={styles.sectionTitle}>Writing</h2>
        <WritingSection />
      </section>

      <hr className={styles.divider} />

      <footer className={styles.footer}>
        <p>© 2026 Abdullah Ihtesham. Powered by Next.js.</p>
      </footer>
    </main>
  );
}
