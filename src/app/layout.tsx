import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';
import styles from './layout.module.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Abdullah Ihtesham – AI & Full-Stack Developer',
  description:
    'Computer Science student @ FAST NUCES. Building AI-driven systems and backend infrastructure. Interested in fintech, LLMs, and distributed systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable}`}>
      <body>
        <div className={styles.wrapper}>
          <Navbar />
          {children}
        </div>
        <div className="crt-line" />
      </body>
    </html>
  );
}
