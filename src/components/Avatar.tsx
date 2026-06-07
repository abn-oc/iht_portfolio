'use client';

import React, { useState } from 'react';
import styles from './Avatar.module.css';

export default function Avatar({ size = 160 }: { size?: number }) {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.wrapper}>
      {open ? (
        <div className={styles.window}>
          <div className={styles.titleBar}>
            <span className={styles.titleText}>iht.jpg</span>
            <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close">
              ✕
            </button>
          </div>
          <div className={styles.viewport}>
            <img
              src="/iht.jpg"
              alt="Abdullah Ihtasham"
              width={size}
              height={size}
              className={styles.art}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      ) : (
        <button className={styles.iconBtn} onClick={() => setOpen(true)}>
          <img src="/iht_icon.png" alt="iht.jpg" width={128} height={128} className={styles.icon} />
          <span className={styles.iconLabel}>iht.jpg</span>
        </button>
      )}
    </div>
  );
}
