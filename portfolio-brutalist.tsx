'use client';

import React, { ReactNode } from 'react';

// Section wrapper for consistent spacing
const Section = ({ children, id }: { children: ReactNode; id?: string }) => (
  <section id={id} className="mb-12">
    {children}
  </section>
);

// Subsection header (work, projects, posts)
const SectionHeader = ({ children }: { children: ReactNode }) => (
  <h2 className="text-sm font-semibold tracking-wide text-gray-900 mb-6 border-b border-gray-300 pb-2">
    {children}
  </h2>
);

// Work entry
const WorkEntry = ({
  title,
  company,
  period,
  description,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
}) => (
  <div className="mb-6 last:mb-0">
    <div className="flex justify-between items-baseline gap-4">
      <div>
        <span className="font-semibold text-gray-900">{title}</span>
        <span className="text-gray-500 ml-2">@{company}</span>
      </div>
      <span className="text-gray-400 text-sm whitespace-nowrap">{period}</span>
    </div>
    <p className="text-gray-600 text-sm mt-2 leading-relaxed">{description}</p>
  </div>
);

// Project entry
const ProjectEntry = ({
  name,
  description,
  tech,
  link,
}: {
  name: string;
  description: string;
  tech: string[];
  link?: string;
}) => (
  <div className="mb-5 last:mb-0">
    <div className="flex items-baseline gap-2">
      <span className="font-semibold text-gray-900">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {name}
          </a>
        ) : (
          name
        )}
      </span>
      <span className="text-gray-400 text-xs">({tech.join(', ')})</span>
    </div>
    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{description}</p>
  </div>
);

// Post entry
const PostEntry = ({
  title,
  date,
  excerpt,
  link,
}: {
  title: string;
  date: string;
  excerpt: string;
  link?: string;
}) => (
  <div className="mb-5 last:mb-0">
    <div className="flex justify-between gap-4 items-baseline">
      <span className="font-semibold text-gray-900">
        {link ? (
          <a href={link} className="hover:underline">
            {title}
          </a>
        ) : (
          title
        )}
      </span>
      <span className="text-gray-400 text-sm whitespace-nowrap">{date}</span>
    </div>
    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{excerpt}</p>
  </div>
);

// Social links
const SocialLinks = () => (
  <div className="flex gap-4 text-sm">
    <a href="https://github.com" className="text-gray-600 hover:text-gray-900 underline">
      github
    </a>
    <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 underline">
      linkedin
    </a>
    <a href="mailto:hello@example.com" className="text-gray-600 hover:text-gray-900 underline">
      email
    </a>
  </div>
);

export default function BrutalistPortfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Global font: Monospace via CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        * {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
        }
      `}</style>

      <main className="max-w-2xl mx-auto px-6 py-16 sm:px-8">
        {/* ===== HEADER ===== */}
        <Section id="header">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Abdullah Ihtesham</h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Computer Science student @ FAST NUCES. Building AI-driven systems and backend infrastructure. 
            Interested in fintech, LLMs, and distributed systems.
          </p>
          <SocialLinks />
        </Section>

        <hr className="border-gray-200 my-12" />

        {/* ===== WORK ===== */}
        <Section id="work">
          <SectionHeader>Work</SectionHeader>
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
        </Section>

        <hr className="border-gray-200 my-12" />

        {/* ===== PROJECTS ===== */}
        <Section id="projects">
          <SectionHeader>Projects</SectionHeader>
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
        </Section>

        <hr className="border-gray-200 my-12" />

        {/* ===== POSTS ===== */}
        <Section id="posts">
          <SectionHeader>Writing</SectionHeader>
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
        </Section>

        <hr className="border-gray-200 my-12" />

        {/* ===== FOOTER ===== */}
        <footer className="text-gray-500 text-xs mt-16 pt-8 border-t border-gray-200">
          <p>© 2024. Built with Next.js and Tailwind CSS. Source on GitHub.</p>
        </footer>
      </main>
    </div>
  );
}
