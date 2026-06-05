import React from 'react';
import Avatar from './Avatar';
import styles from './HeaderSection.module.css';

export default function HeaderSection() {
  return (
    <div className={styles.container}>
      <div className={styles.avatarWrap}>
        <Avatar size={128} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.name}>Abdullah Ihtesham</h1>
        <p className={styles.bio}>
          Computer Science student @ FAST NUCES. Building AI-driven systems and backend infrastructure.
          Interested in fintech, LLMs, and distributed systems.
        </p>

        <div className={styles.links}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
            github
          </a>
          <span className={styles.separator}>|</span>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
            linkedin
          </a>
          <span className={styles.separator}>|</span>
          <a href="mailto:hello@example.com" className={styles.link}>
            email
          </a>
        </div>
      </div>
    </div>
  );
}
