'use client';

import React, { useState } from 'react';
import styles from './Avatar.module.css';

export default function Avatar({ size = 160 }: { size?: number }) {
  const [isAngry, setIsAngry] = useState(false);

  const toggleImage = () => setIsAngry((prev) => !prev);

  return (
    <div className={styles.window}>
      <div className={styles.titleBar}>
        <span className={styles.titleText}>iht.jpg</span>
        <button className={styles.closeBtn} onClick={toggleImage} aria-label="Close">
          ✕
        </button>
      </div>
      <div className={styles.viewport}>
        <img
          src={isAngry ? '/iht.jpg' : '/iht.jpg'}
          alt={isAngry ? 'Abdullah Ihtasham' : 'Abdullah Ihtasham'}
          width={size}
          height={size}
          className={styles.art}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
