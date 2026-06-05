import React from 'react';
import styles from './WritingSection.module.css';

interface PostEntryProps {
  title: string;
  date: string;
  excerpt: string;
  link?: string;
}

const PostEntry = ({ title, date, excerpt, link }: PostEntryProps) => (
  <div className={styles.entry}>
    <div className={styles.header}>
      {link ? (
        <a href={link} className={styles.titleLink}>
          {title}
        </a>
      ) : (
        <span className={styles.title}>{title}</span>
      )}
      <span className={styles.date}>{date}</span>
    </div>
    <p className={styles.excerpt}>{excerpt}</p>
  </div>
);

export default function WritingSection() {
  return (
    <div>
      <PostEntry
        title="Building Scalable Backend Systems"
        date="2024"
        excerpt="Lessons from Spring Boot and PostgreSQL. Architecture patterns that matter."
      />
      <PostEntry
        title="Understanding RAG: From Theory to Practice"
        date="2024"
        excerpt="Retrieval-augmented generation for production LLM applications."
      />
      <PostEntry
        title="Fintech Engineering in Pakistan"
        date="2024"
        excerpt="Challenges and opportunities in building financial infrastructure."
      />
    </div>
  );
}
