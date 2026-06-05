'use client';

import React from 'react';
import Avatar from './Avatar';

export default function HeaderSection() {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
      {/* Avatar Viewer */}
      <div className="shrink-0 self-center md:self-start">
        <Avatar size={128} />
        <div className="text-[10px] text-gray-500 font-mono text-center mt-1">AVATAR.BMP</div>
      </div>

      {/* Main Text Content */}
      <div className="flex-1">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 font-mono tracking-tight">
          Abdullah Ihtesham
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 font-mono">
          Computer Science student @ FAST NUCES. Building AI-driven systems and backend infrastructure. 
          Interested in fintech, LLMs, and distributed systems.
        </p>
        
        {/* Social Links */}
        <div className="flex gap-4 text-xs font-mono">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline font-semibold">
            github
          </a>
          <span className="text-gray-400">|</span>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline font-semibold">
            linkedin
          </a>
          <span className="text-gray-400">|</span>
          <a href="mailto:hello@example.com" className="text-blue-700 hover:text-blue-900 underline font-semibold">
            email
          </a>
        </div>
      </div>
    </div>
  );
}
