import React from 'react';
import styles from './Avatar.module.css';

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
  'KKKKKKKKKKKKK...',
];

const colorMap: Record<string, string> = {
  '.': '#7aa2b3',
  K: '#1a1a1a',
  S: '#fcd0a1',
  H: '#4a3728',
  G: '#ffffff',
  B: '#000080',
  C: '#008080',
  W: '#ffffff',
};

export default function Avatar({ size = 128 }: { size?: number }) {
  return (
    <div className={styles.window}>
      <div className={styles.titleBar}>
        <span className={styles.titleText}>AVATAR.BMP</span>
        <button className={styles.closeBtn} disabled aria-label="Close">
          ✕
        </button>
      </div>
      <div className={styles.viewport}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          shapeRendering="crispEdges"
          className={styles.art}
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
            )),
          )}
        </svg>
      </div>
    </div>
  );
}
