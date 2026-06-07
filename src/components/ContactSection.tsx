import React from 'react';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.heading}>Contact me</h2>
      <div className={styles.imageWrap}>
        <img
          src="/cnnect.jpg"
          alt="Connect"
          className={styles.image}
        />
      </div>
      <div className={styles.links}>
        <a href="https://github.com/abn-oc" target="_blank" rel="noopener noreferrer" className={styles.link}>
          github
        </a>
        <span className={styles.separator}>/</span>
        <a href="https://www.linkedin.com/in/abdullah-ihtasham-738011223/" target="_blank" rel="noopener noreferrer" className={styles.link}>
          linkedin
        </a>
        <span className={styles.separator}>/</span>
        <a href="mailto:abdullah.iht22@gmail.com" className={styles.link}>
          email
        </a>
      </div>
    </div>
  );
}
