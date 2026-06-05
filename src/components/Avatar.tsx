'use client';

import React from 'react';

// 16x16 Pixel Art Grid for Developer Avatar
// Colors:
// . = Background (#7aa2b3 - retro slate blue)
// K = Black Outline (#1a1a1a)
// S = Skin Tone (#ffcc99)
// H = Hair (#5c4033 - brown)
// G = Glasses (#ffffff)
// B = Glasses Frame (#000080 - dark blue)
// C = Clothes (#ff0000 - retro red)
// W = White details (#ffffff)

const pixelArt = [
  '..HHHHHHH.......',
  '.HKKKKKKKH......',
  'HKKSSSSSKSK.....',
  'HKSBGBBSBGSK....',
  'HKSBKKBSBKSK....',
  'HKSSSSSKSKKK....',
  '.KKSSSKKKSSK....',
  '..KSSSSSSSKS....',
  '..KSSKKKKSK.....',
  '...KKSSSSK......',
  '..KKKCCCCKKK....',
  '.KCCCCCCCCCK....',
  'KCCCCCCCCCCCK...',
  'KCCWCCCCCWCCK...',
  'KCCWCCCCCWCCK...',
  'KKKKKKKKKKKKK...'
];

const colorMap: Record<string, string> = {
  '.': '#7aa2b3', // Slate blue background
  'K': '#1a1a1a', // Charcoal outline
  'S': '#fcd0a1', // Retro skin tone
  'H': '#4a3728', // Dark brown hair
  'G': '#ffffff', // Glasses lenses
  'B': '#000080', // Dark blue glasses frame
  'C': '#008080', // Teal shirt
  'W': '#ffffff', // Shirt highlights
};

export default function Avatar({ size = 128 }: { size?: number }) {
  const pixelSize = size / 16;

  return (
    <div 
      className="win95-avatar-container" 
      style={{
        padding: '4px',
        backgroundColor: '#c0c0c0',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: '#808080 #ffffff #ffffff #808080', // Inset border to feel like an image viewport
        display: 'inline-block',
        lineHeight: 0
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
        className="select-none"
        aria-label="Retro Programmer Avatar"
      >
        {pixelArt.map((row, y) =>
          row.split('').map((char, x) => (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={colorMap[char] || '#c0c0c0'}
            />
          ))
        )}
      </svg>
    </div>
  );
}
