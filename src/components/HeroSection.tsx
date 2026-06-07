import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.name}>Abdullah Ihtasham</h1>
      <p className={styles.title}>AI &amp; Full-Stack Developer</p>
      <div className={styles.links}>
        <a href="https://github.com/abn-oc" target="_blank" rel="noopener noreferrer" className={styles.link}>
          github
        </a>
        <span className={styles.sep}>/</span>
        <a href="https://www.linkedin.com/in/abdullah-ihtasham-738011223/" target="_blank" rel="noopener noreferrer" className={styles.link}>
          linkedin
        </a>
        <span className={styles.sep}>/</span>
        <a href="mailto:abdullah.iht22@gmail.com" className={styles.link}>
          email
        </a>
      </div>
    </div>
  );
}
