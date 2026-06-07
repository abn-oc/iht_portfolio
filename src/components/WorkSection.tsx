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
        title="Web Developer Intern"
        company="Fast Nexa"
        period="Jul 2025 – Aug 2025"
        description="Engineered backend REST API for a book management system and revamped an HRMS frontend to deliver responsive, bug-free user experiences."
      />
    </div>
  );
}
