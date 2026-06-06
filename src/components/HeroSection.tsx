import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.name}>Abdullah Ihtesham</h1>
      <p className={styles.title}>AI &amp; Full-Stack Developer</p>
    </div>
  );
}
