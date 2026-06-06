import React from 'react';
import styles from './WorkSection.module.css';

interface WorkEntryProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const WorkEntry = ({ title, company, period, description }: WorkEntryProps) => (
  <div className={styles.entry}>
    <div className={styles.header}>
      <div className={styles.titleGroup}>
        <span className={styles.title}>{title}</span>
        <span className={styles.company}>@{company}</span>
      </div>
      <span className={styles.period}>{period}</span>
    </div>
    <p className={styles.description}>{description}</p>
  </div>
);

export default function WorkSection() {
  return (
    <div>
      <WorkEntry
        title="Full-Stack Developer Intern"
        company="Fast Nexa"
        period="Spring 2024"
        description="Built HRMS web application using Spring Boot and PostgreSQL. Deployed on AWS S3. Implemented authentication flows and data persistence layers."
      />
      <WorkEntry
        title="AI Research (Ongoing)"
        company="FAST NUCES AI Lab"
        period="2023–2024"
        description="Explored LLM fine-tuning, RAG systems, and agent architectures. ML evaluation metrics, classification/regression pipelines."
      />
    </div>
  );
}
