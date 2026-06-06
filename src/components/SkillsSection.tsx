import React from 'react';
import styles from './SkillsSection.module.css';

const skills = [
  { category: 'Languages', items: 'TypeScript, Python, Java, SQL' },
  { category: 'Backend', items: 'Node.js, Spring Boot, PostgreSQL, Supabase' },
  { category: 'Frontend', items: 'React, Next.js, React Native, Expo' },
  { category: 'AI/ML', items: 'LLMs, RAG, TensorFlow, Gemini API' },
];

export default function SkillsSection() {
  return (
    <div className={styles.skills}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.grid}>
        {skills.map((s) => (
          <div key={s.category} className={styles.item}>
            <span className={styles.category}>{s.category}</span>
            <span className={styles.items}>{s.items}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
