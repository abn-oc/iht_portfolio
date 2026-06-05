'use client';

import React, { useState } from 'react';
import Window from '@/components/Window';
import HeaderSection from '@/components/HeaderSection';
import WorkSection from '@/components/WorkSection';
import ProjectsSection from '@/components/ProjectsSection';
import WritingSection from '@/components/WritingSection';
import Taskbar from '@/components/Taskbar';

interface WindowState {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
}

export default function Home() {
  const [windows, setWindows] = useState<WindowState[]>([
    { id: 'bio', title: 'ABOUT_ME.TXT', isOpen: true, isMinimized: false },
    { id: 'work', title: 'EXPERIENCE.TXT', isOpen: true, isMinimized: false },
    { id: 'projects', title: 'PROJECTS.TXT', isOpen: true, isMinimized: false },
    { id: 'writing', title: 'WRITING.TXT', isOpen: true, isMinimized: false },
  ]);

  const toggleMinimize = (id: string) => {
    setWindows((prev) =>
      prev.map((win) =>
        win.id === id ? { ...win, isMinimized: !win.isMinimized } : win
      )
    );
  };

  const restoreWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((win) =>
        win.id === id ? { ...win, isOpen: true, isMinimized: false } : win
      )
    );
  };

  const closeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((win) =>
        win.id === id ? { ...win, isOpen: false } : win
      )
    );
  };

  const resetLayout = () => {
    setWindows([
      { id: 'bio', title: 'ABOUT_ME.TXT', isOpen: true, isMinimized: false },
      { id: 'work', title: 'EXPERIENCE.TXT', isOpen: true, isMinimized: false },
      { id: 'projects', title: 'PROJECTS.TXT', isOpen: true, isMinimized: false },
      { id: 'writing', title: 'WRITING.TXT', isOpen: true, isMinimized: false },
    ]);
  };

  const anyWindowOpen = windows.some((w) => w.isOpen && !w.isMinimized);

  return (
    <div className="min-h-screen bg-zinc-100 flex flex-col justify-between pb-12">
      {/* Desktop Workspace */}
      <main className="max-w-2xl w-full mx-auto px-4 py-8 md:py-16 flex-1 flex flex-col justify-start">
        
        {/* Bio/Header Section */}
        {windows.find((w) => w.id === 'bio')?.isOpen && 
         !windows.find((w) => w.id === 'bio')?.isMinimized && (
          <Window
            id="bio-window"
            title="ABOUT_ME.TXT"
            onMinimize={() => toggleMinimize('bio')}
            onClose={() => closeWindow('bio')}
          >
            <HeaderSection />
          </Window>
        )}

        {/* Work Section */}
        {windows.find((w) => w.id === 'work')?.isOpen && 
         !windows.find((w) => w.id === 'work')?.isMinimized && (
          <Window
            id="work-window"
            title="EXPERIENCE.TXT"
            onMinimize={() => toggleMinimize('work')}
            onClose={() => closeWindow('work')}
          >
            <WorkSection />
          </Window>
        )}

        {/* Projects Section */}
        {windows.find((w) => w.id === 'projects')?.isOpen && 
         !windows.find((w) => w.id === 'projects')?.isMinimized && (
          <Window
            id="projects-window"
            title="PROJECTS.TXT"
            onMinimize={() => toggleMinimize('projects')}
            onClose={() => closeWindow('projects')}
          >
            <ProjectsSection />
          </Window>
        )}

        {/* Writing Section */}
        {windows.find((w) => w.id === 'writing')?.isOpen && 
         !windows.find((w) => w.id === 'writing')?.isMinimized && (
          <Window
            id="writing-window"
            title="WRITING.TXT"
            onMinimize={() => toggleMinimize('writing')}
            onClose={() => closeWindow('writing')}
          >
            <WritingSection />
          </Window>
        )}

        {/* Empty State when all windows minimized/closed */}
        {!anyWindowOpen && (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-300 rounded-lg my-12 bg-white/50">
            <span className="text-3xl mb-4 select-none">🖥️</span>
            <h3 className="font-bold text-gray-700 text-sm mb-1">Workspace Empty</h3>
            <p className="text-gray-500 text-xs max-w-xs leading-relaxed">
              All containers closed or minimized. Use the <strong className="text-blue-800">Start</strong> menu at the bottom to restore them.
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="text-gray-400 text-[10px] mt-12 text-center select-none font-mono">
          <p>© 2026 Abdullah Ihtesham. Powered by Next.js & Tailwind CSS.</p>
        </footer>
      </main>

      {/* Retro Taskbar */}
      <Taskbar
        windows={windows}
        toggleMinimize={toggleMinimize}
        restoreWindow={restoreWindow}
        resetLayout={resetLayout}
      />
    </div>
  );
}
