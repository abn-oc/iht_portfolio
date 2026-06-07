import React from 'react';
import Avatar from './Avatar';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <div className={styles.about}>
      <div className={styles.textCol}>
        <h2 className={styles.heading}>About</h2>
        <p className={styles.text}>
          CS student @ FAST NUCES.
          Based in Lahore, Pakistan. <br/>
          Building AI systems and full-stack apps.
          Interested in how AI can and is affecting our lives.
        </p>
      </div>
      <div className={styles.imageCol}>
        <Avatar size={160} />
      </div>
    </div>
  );
}
