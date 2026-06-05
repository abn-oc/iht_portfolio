'use client';

import React, { useState, useEffect, useRef } from 'react';

interface WindowState {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
}

interface TaskbarProps {
  windows: WindowState[];
  toggleMinimize: (id: string) => void;
  restoreWindow: (id: string) => void;
  resetLayout: () => void;
}

export default function Taskbar({ windows, toggleMinimize, restoreWindow, resetLayout }: TaskbarProps) {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [time, setTime] = useState('');
  const startMenuRef = useRef<HTMLDivElement>(null);
  const startButtonRef = useRef<HTMLButtonElement>(null);

  // Update Clock
  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const minutesStr = minutes < 10 ? '0' + minutes : minutes;
      setTime(`${hours}:${minutesStr} ${ampm}`);
    };
    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  // Close Start Menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(event.target as Node) &&
        startButtonRef.current &&
        !startButtonRef.current.contains(event.target as Node)
      ) {
        setStartMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStartItemClick = (id: string) => {
    restoreWindow(id);
    setStartMenuOpen(false);
  };

  const handleResetClick = () => {
    resetLayout();
    setStartMenuOpen(false);
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-[40px] z-50 flex items-center justify-between px-1 select-none font-mono"
      style={{
        backgroundColor: '#c0c0c0',
        borderTop: '2px solid #ffffff',
        boxShadow: '0 -1px 0px #808080',
      }}
    >
      {/* Start Button & Window Tabs */}
      <div className="flex items-center gap-2 overflow-hidden h-full flex-1 mr-2">
        {/* Start Button */}
        <button
          ref={startButtonRef}
          onClick={() => setStartMenuOpen(!startMenuOpen)}
          className="flex items-center gap-1.5 px-2 py-0.5 font-bold text-xs"
          style={{
            height: '28px',
            backgroundColor: '#c0c0c0',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: startMenuOpen ? '#808080 #ffffff #ffffff #808080' : '#ffffff #808080 #808080 #ffffff',
            boxShadow: startMenuOpen 
              ? 'inset 1px 1px 0px #0a0a0a' 
              : 'inset 1px 1px 0px #ffffff, inset -1px -1px 0px #0a0a0a',
            cursor: 'pointer',
          }}
        >
          {/* Retro Windows Flag Logo */}
          <div className="grid grid-cols-2 grid-rows-2 gap-[1px] w-[12px] h-[10px] shrink-0">
            <div className="bg-[#ff0000]"></div>
            <div className="bg-[#008000]"></div>
            <div className="bg-[#0000ff]"></div>
            <div className="bg-[#ffff00]"></div>
          </div>
          <span className="text-gray-900 font-bold text-xs">Start</span>
        </button>

        {/* Start Menu Popup */}
        {startMenuOpen && (
          <div
            ref={startMenuRef}
            className="absolute bottom-[40px] left-1 w-[220px] flex z-50"
            style={{
              backgroundColor: '#c0c0c0',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: '#ffffff #808080 #808080 #ffffff',
              boxShadow: '2px 2px 10px rgba(0,0,0,0.3), inset 1px 1px 0px #ffffff, inset -1px -1px 0px #0a0a0a',
              padding: '2px',
            }}
          >
            {/* Left side brand banner */}
            <div
              className="w-[28px] shrink-0 flex items-end justify-center pb-4 text-white font-bold select-none"
              style={{
                background: 'linear-gradient(180deg, #000080, #1084d0)',
              }}
            >
              <span 
                className="transform -rotate-90 origin-bottom whitespace-nowrap text-sm tracking-widest text-[#dfdfdf]"
                style={{
                  marginBottom: '28px',
                  display: 'block',
                }}
              >
                Abdullah 95
              </span>
            </div>

            {/* Menu options list */}
            <div className="flex-1 flex flex-col py-1 bg-[#c0c0c0]">
              <div className="px-3 py-1 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                Programs
              </div>
              
              {windows.map((win) => (
                <button
                  key={win.id}
                  onClick={() => handleStartItemClick(win.id)}
                  className="w-full text-left px-4 py-1.5 hover:bg-[#000080] hover:text-white text-xs text-gray-900 font-bold flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-[#000080] group-hover:text-white">🗔</span>
                  <span>{win.title}</span>
                </button>
              ))}

              <hr className="my-1 border-t border-gray-400 border-b border-white" />

              <button
                onClick={handleResetClick}
                className="w-full text-left px-4 py-1.5 hover:bg-[#000080] hover:text-white text-xs text-gray-900 font-bold flex items-center gap-2 cursor-pointer"
              >
                <span>🔄</span>
                <span>Reset Windows</span>
              </button>

              <hr className="my-1 border-t border-gray-400 border-b border-white" />

              <div className="px-3 py-1 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                Links
              </div>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 hover:bg-[#000080] hover:text-white text-xs text-gray-900 font-bold flex items-center gap-2 cursor-pointer"
              >
                <span>🐙</span>
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 hover:bg-[#000080] hover:text-white text-xs text-gray-900 font-bold flex items-center gap-2 cursor-pointer"
              >
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        )}

        {/* Separator line between Start and Tabs */}
        <div className="w-[2px] h-[22px] bg-gray-400 border-r border-white self-center"></div>

        {/* Window Tabs List */}
        <div className="flex items-center gap-1 overflow-x-auto h-full flex-1 no-scrollbar">
          {windows.map((win) => {
            if (!win.isOpen) return null;
            const isTabPressed = !win.isMinimized;
            return (
              <button
                key={win.id}
                onClick={() => toggleMinimize(win.id)}
                className="flex items-center gap-1.5 px-2 text-[10px] md:text-xs font-bold text-gray-900 truncate shrink-0 select-none"
                style={{
                  height: '28px',
                  width: '120px',
                  backgroundColor: isTabPressed ? '#e0e0e0' : '#c0c0c0',
                  backgroundImage: isTabPressed 
                    ? 'radial-gradient(circle, #e0e0e0 20%, transparent 20%), radial-gradient(circle, #e0e0e0 20%, transparent 20%)'
                    : 'none',
                  backgroundSize: isTabPressed ? '2px 2px' : 'none',
                  backgroundPosition: isTabPressed ? '0 0, 1px 1px' : 'none',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: isTabPressed ? '#808080 #ffffff #ffffff #808080' : '#ffffff #808080 #808080 #ffffff',
                  boxShadow: isTabPressed 
                    ? 'inset 1px 1px 0px #0a0a0a' 
                    : 'inset 1px 1px 0px #ffffff, inset -1px -1px 0px #0a0a0a',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span className="shrink-0 text-blue-800">🗔</span>
                <span className="truncate">{win.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* System Tray (Clock & Icons) */}
      <div
        className="flex items-center gap-2 px-2 shrink-0 select-none"
        style={{
          height: '28px',
          backgroundColor: '#c0c0c0',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#808080 #ffffff #ffffff #808080',
        }}
      >
        {/* Network & Speaker Icon place holders */}
        <div className="flex items-center gap-1.5 text-xs text-gray-700">
          {/* Sound Icon */}
          <span title="Volume" className="cursor-default text-[10px] md:text-xs">🔊</span>
          {/* Dial-up Network Icon */}
          <span title="Dial-up Connection" className="cursor-default text-[10px] md:text-xs">🖧</span>
        </div>
        <div className="w-[1px] h-[16px] bg-gray-400 border-r border-white"></div>
        {/* Digital Clock */}
        <span className="text-[10px] md:text-xs text-gray-900 font-bold whitespace-nowrap">
          {time}
        </span>
      </div>
    </div>
  );
}
