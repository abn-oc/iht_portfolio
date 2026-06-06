import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.name}>Abdullah Ihtesham</h1>
      <p className={styles.title}>AI &amp; Full-Stack Developer</p>
      <div className={styles.links}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
          github
        </a>
        <span className={styles.sep}>/</span>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
          linkedin
        </a>
        <span className={styles.sep}>/</span>
        <a href="mailto:hello@example.com" className={styles.link}>
          email
        </a>
      </div>
    </div>
  );
}
