'use client';

import React from 'react';

interface WindowProps {
  title: string;
  onMinimize?: () => void;
  onClose?: () => void;
  children: React.ReactNode;
  id?: string;
}

export default function Window({ title, onMinimize, onClose, children, id }: WindowProps) {
  return (
    <div
      id={id}
      className="win95-window flex flex-col w-full mb-8 last:mb-0 transition-all duration-200"
      style={{
        backgroundColor: '#c0c0c0',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: '#ffffff #808080 #808080 #ffffff',
        boxShadow: 'inset 1px 1px 0px #ffffff, inset -1px -1px 0px #0a0a0a',
        padding: '3px',
      }}
    >
      {/* Title Bar */}
      <div
        className="flex items-center justify-between px-2 py-1 select-none"
        style={{
          background: 'linear-gradient(90deg, #000080, #1084d0)',
        }}
      >
        <span className="text-white font-bold text-xs font-mono tracking-wider truncate mr-4">
          {title}
        </span>
        <div className="flex gap-[3px] shrink-0">
          {/* Minimize Button */}
          {onMinimize && (
            <button
              onClick={onMinimize}
              className="win95-btn flex items-center justify-center font-bold text-xs"
              style={{
                width: '16px',
                height: '14px',
                backgroundColor: '#c0c0c0',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#ffffff #808080 #808080 #ffffff',
                boxShadow: 'inset 1px 1px 0px #ffffff, inset -1px -1px 0px #0a0a0a',
                paddingBottom: '3px',
                cursor: 'pointer',
              }}
              aria-label="Minimize"
            >
              _
            </button>
          )}
          {/* Maximize Button (disabled look in retro style) */}
          <button
            disabled
            className="win95-btn flex items-center justify-center font-bold text-[10px] opacity-60 cursor-not-allowed"
            style={{
              width: '16px',
              height: '14px',
              backgroundColor: '#c0c0c0',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: '#ffffff #808080 #808080 #ffffff',
              boxShadow: 'inset 1px 1px 0px #ffffff, inset -1px -1px 0px #0a0a0a',
              cursor: 'not-allowed',
            }}
            aria-label="Maximize"
          >
            🗖
          </button>
          {/* Close Button */}
          {onClose && (
            <button
              onClick={onClose}
              className="win95-btn flex items-center justify-center font-bold text-[10px] ml-[2px]"
              style={{
                width: '16px',
                height: '14px',
                backgroundColor: '#c0c0c0',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#ffffff #808080 #808080 #ffffff',
                boxShadow: 'inset 1px 1px 0px #ffffff, inset -1px -1px 0px #0a0a0a',
                cursor: 'pointer',
              }}
              aria-label="Close"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Content Area - styled like a retro document text area */}
      <div
        className="win95-content flex-1 p-4 md:p-6 bg-white overflow-auto text-gray-900 font-mono text-sm leading-relaxed"
        style={{
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#808080 #ffffff #ffffff #808080',
          marginTop: '3px',
        }}
      >
        {children}
      </div>
    </div>
  );
}
