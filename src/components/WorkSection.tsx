'use client';

import React from 'react';

interface WorkEntryProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const WorkEntry = ({ title, company, period, description }: WorkEntryProps) => (
  <div className="mb-6 last:mb-0 border-b border-dashed border-gray-200 pb-5 last:pb-0 last:border-b-0">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4 mb-2">
      <div>
        <span className="font-bold text-gray-900 text-sm md:text-base">{title}</span>
        <span className="text-gray-500 text-xs md:text-sm ml-2">@{company}</span>
      </div>
      <span className="text-gray-400 text-xs md:text-sm whitespace-nowrap self-start sm:self-auto">{period}</span>
    </div>
    <p className="text-gray-600 text-xs md:text-sm mt-1 leading-relaxed">{description}</p>
  </div>
);

export default function WorkSection() {
  return (
    <div className="flex flex-col">
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
