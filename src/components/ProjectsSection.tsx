'use client';

import React from 'react';

interface ProjectEntryProps {
  name: string;
  description: string;
  tech: string[];
  link?: string;
}

const ProjectEntry = ({ name, description, tech, link }: ProjectEntryProps) => (
  <div className="mb-6 last:mb-0 border-b border-dashed border-gray-200 pb-5 last:pb-0 last:border-b-0">
    <div className="flex items-baseline flex-wrap gap-2 mb-1">
      <span className="font-bold text-gray-900 text-sm md:text-base">
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-700 hover:text-blue-900 underline font-semibold"
          >
            {name}
          </a>
        ) : (
          name
        )}
      </span>
      <span className="text-gray-400 text-xs font-semibold">({tech.join(', ')})</span>
    </div>
    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{description}</p>
  </div>
);

export default function ProjectsSection() {
  return (
    <div className="flex flex-col">
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
