import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <AboutSection />

      {/* <hr className={styles.divider} /> */}

      <SkillsSection />
    </main>
  );
}
