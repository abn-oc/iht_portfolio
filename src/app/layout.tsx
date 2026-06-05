import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Abdullah Ihtesham – AI & Full-Stack Developer',
  description:
    'Computer Science student @ FAST NUCES. Building AI-driven systems and backend infrastructure. Interested in fintech, LLMs, and distributed systems.',
  authors: [{ name: 'Abdullah Ihtesham' }],
  openGraph: {
    title: 'Abdullah Ihtesham',
    description:
      'Computer Science student @ FAST NUCES. Building AI-driven systems and backend infrastructure.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdullah Ihtesham',
    description: 'Computer Science student, AI & FullStack Developer',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-zinc-100 font-mono text-gray-900 pb-[40px]">
        {children}
      </body>
    </html>
  );
}
