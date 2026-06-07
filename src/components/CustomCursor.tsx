'use client';

import React, { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

const SELECTORS = 'a, button, [role="button"], input, textarea, select';

export default function CustomCursor() {
  const elRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const hover = useRef(false);
  const s = useRef(1);
  const r = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onLeave = () => {
      hover.current = false;
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('click', onLeave);

    const el = elRef.current;
    if (!el) return;

    let frame: number;
    const tick = () => {
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      pos.current.x += dx * 0.15;
      pos.current.y += dy * 0.15;

      const under = document.elementFromPoint(target.current.x, target.current.y);
      hover.current = under !== null && under !== document.documentElement && under !== document.body
        ? under.closest(SELECTORS) !== null
        : false;

      const ts = hover.current ? 1.3 : 1;
      const tr = hover.current ? 45 : 0;
      const k = hover.current ? 0.12 : 0.25;
      s.current += (ts - s.current) * k;
      r.current += (tr - r.current) * k;

      el.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) scale(${s.current}) rotate(${r.current}deg)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('click', onLeave);
    };
  }, []);

  return <div ref={elRef} className={styles.cursor} />;
}
