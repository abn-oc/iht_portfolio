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
        name="Campfire"
        tech={['Next.js', 'Supabase', 'FastAPI', 'LangChain', 'Gemini API', 'ChromaDB']}
        description="A full-stack RAG chatbot using FastAPI, LangChain, and Gemini API, featuring real-time streaming to provide instant responses on the Next.js frontend and Supabase Database."
        link="https://github.com/abn-oc/Campfire"
      />
      <ProjectEntry
        name="VocalCanvas"
        tech={['Python', 'CNN', 'TensorFlow']}
        description="Speaker recognition pipeline using spectrogram-based deep learning. 80%+ accuracy on speaker identification."
        link="https://github.com/abn-oc/VocalCanvas-"
      />
      <ProjectEntry
        name="ArcadePlay"
        tech={['React', 'Node.js', 'ExpressJS', 'Socket.io', 'PostgreSQL']}
        description="A real-time multiplayer gaming platform using a React frontend and a Node.js API with Socket.io for game state synchronization and real-time communication."
        link="https://github.com/abn-oc/Arcade-Play"
      />
      <ProjectEntry
        name="Limitless"
        tech={['React Native', 'Expo', 'Supabase', 'TypeScript', 'Gemini API']}
        description="Fitness tracking app with macro monitoring and AI-powered workout recommendations via Gemini API."
        link="https://github.com/SaaddRiazz/Limitless"
      />
      <ProjectEntry
        name="Runt's Mini Adventure (wip)"
        tech={['Unity', 'C#']}
        description="A 3D platformer game developed in Unity, featuring a character named Runt on a mini adventure."
        link="https://github.com/AbdullahBRashid/Runts-Mini-Adventure/tree/devS"
      />
      <ProjectEntry
        name="BMS Backend"
        tech={['Springboot', 'PostgreSQL', 'AWS S3', 'Google SMTP']}
        description="Backend REST API for a book management system, built with Spring Boot and PostgreSQL, deployed on AWS S3."
        link="https://github.com/abn-oc/bms-backend"
      />
      <ProjectEntry
        name="12 Beads"
        tech={['C++', 'Raylib']}
        description="Board game, developed in C++ using Raylib for graphics."
        link="https://github.com/abn-oc/12-Beads"
      />
      <ProjectEntry
        name="Assembly Bird"
        tech={['Assembly x86']}
        description="Flappy Bird made with Assembly x86."
        link="https://github.com/abn-oc/assembly-bird"
      />
    </div>
  );
}
