'use client';

import React from 'react';

interface PostEntryProps {
  title: string;
  date: string;
  excerpt: string;
  link?: string;
}

const PostEntry = ({ title, date, excerpt, link }: PostEntryProps) => (
  <div className="mb-6 last:mb-0 border-b border-dashed border-gray-200 pb-5 last:pb-0 last:border-b-0">
    <div className="flex justify-between gap-4 items-baseline mb-1">
      <span className="font-bold text-gray-900 text-sm md:text-base">
        {link ? (
          <a href={link} className="text-blue-700 hover:text-blue-900 underline font-semibold">
            {title}
          </a>
        ) : (
          title
        )}
      </span>
      <span className="text-gray-400 text-xs md:text-sm whitespace-nowrap">{date}</span>
    </div>
    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{excerpt}</p>
  </div>
);

export default function WritingSection() {
  return (
    <div className="flex flex-col">
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
