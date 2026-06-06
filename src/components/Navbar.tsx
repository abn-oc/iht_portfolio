'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const links = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {links.map((link, i) => (
        <React.Fragment key={link.href}>
          <Link
            href={link.href}
            className={pathname === link.href ? styles.active : styles.link}
          >
            {link.label}
          </Link>
          {i < links.length - 1 && <span className={styles.sep}>/</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}
