import React from 'react';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.heading}>Contact</h2>
      <div className={styles.imageWrap}>
        <img
          src="/cnnect.jpg"
          alt="Connect"
          className={styles.image}
        />
      </div>
      <div className={styles.links}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
          github
        </a>
        <span className={styles.separator}>/</span>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
          linkedin
        </a>
        <span className={styles.separator}>/</span>
        <a href="mailto:hello@example.com" className={styles.link}>
          email
        </a>
      </div>
    </div>
  );
}
