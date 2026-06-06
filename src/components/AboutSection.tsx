import React from 'react';
import Avatar from './Avatar';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <div className={styles.about}>
      <div className={styles.textCol}>
        <h2 className={styles.heading}>About</h2>
        <p className={styles.text}>
          Computer Science student @ FAST NUCES. Building AI-driven systems and backend infrastructure.
          Interested in fintech, LLMs, and distributed systems.
        </p>
      </div>
      <div className={styles.imageCol}>
        <Avatar size={160} />
      </div>
    </div>
  );
}
