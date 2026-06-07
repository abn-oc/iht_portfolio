import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import CustomCursor from '@/components/CustomCursor';
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
    'Building AI systems and full-stack apps. Interested in how AI can and is affecting our lives.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable}`}>
      <body>
        <div className={styles.wrapper}>
          {children}
        </div>
        <div className="crt-line" />
        <CustomCursor />
      </body>
    </html>
  );
}
