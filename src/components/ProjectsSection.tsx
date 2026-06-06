import React from 'react';
import styles from './ProjectsSection.module.css';

interface ProjectEntryProps {
  name: string;
  description: string;
  tech: string[];
  link?: string;
}

const ProjectEntry = ({ name, description, tech, link }: ProjectEntryProps) => (
  <div className={styles.entry}>
    <div className={styles.header}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.nameLink}>
          {name}
        </a>
      ) : (
        <span className={styles.name}>{name}</span>
      )}
      <span className={styles.tech}>({tech.join(', ')})</span>
    </div>
    <p className={styles.description}>{description}</p>
  </div>
);

export default function ProjectsSection() {
  return (
    <div>
      <ProjectEntry
        name="Limitless"
        tech={['React Native', 'Expo', 'Supabase', 'TypeScript']}
        description="Fitness tracking app with macro monitoring and AI-powered workout recommendations via Gemini API."
        link="https://github.com"
      />
      <ProjectEntry
        name="VocalCanvas"
        tech={['Python', 'CNN', 'TensorFlow']}
        description="Speaker recognition pipeline using spectrogram-based deep learning. 80%+ accuracy on speaker identification."
        link="https://github.com"
      />
      <ProjectEntry
        name="Chrome Extension: AI Context"
        tech={['JavaScript', 'Manifest V3', 'Gemini API']}
        description="Floating chat panel that injects webpage context into Claude for intelligent summarization and analysis."
      />
      <ProjectEntry
        name="HostelRate"
        tech={['React', 'Figma', 'HCI Design']}
        description="Hostel booking & review platform for Pakistani students. Includes user research, heuristic evaluation, and wireframes."
      />
    </div>
  );
}
