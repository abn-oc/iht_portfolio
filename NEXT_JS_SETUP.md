// ===== NEXT.JS 14 SETUP FOR BRUTALIST PORTFOLIO =====

// FILE: app/layout.tsx
import type { Metadata } from 'next';
import Portfolio from '@/components/Portfolio';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abdullah Ihtesham – AI & FullStack Developer',
  description:
    'Computer Science student @ FAST NUCES. Building AI-driven systems and backend infrastructure.',
  authors: [{ name: 'Abdullah Ihtesham' }],
  openGraph: {
    title: 'Abdullah Ihtesham',
    description:
      'Computer Science student @ FAST NUCES. Building AI-driven systems and backend infrastructure.',
    url: 'https://yourdomain.com',
    siteName: 'Abdullah Ihtesham',
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
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900">
        <Portfolio />
      </body>
    </html>
  );
}

// ===== OR, if you want children rendered =====
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}

// Then in app/page.tsx:
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return <Portfolio />;
}

---

// FILE: app/globals.css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');

@layer base {
  * {
    @apply box-border;
  }

  html {
    @apply scroll-smooth;
  }

  body {
    @apply bg-white text-gray-900 font-mono;
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Ensure links are always underlined and gray */
  a {
    @apply text-gray-600 underline hover:text-gray-900 transition-colors duration-150;
  }

  /* Smooth transitions */
  @media (prefers-reduced-motion: no-preference) {
    a,
    button {
      @apply transition-colors duration-150;
    }
  }
}

@layer components {
  .section-header {
    @apply text-sm font-semibold tracking-wide text-gray-900 mb-6 border-b border-gray-300 pb-2;
  }

  .work-entry {
    @apply mb-6 last:mb-0;
  }

  .project-entry {
    @apply mb-5 last:mb-0;
  }

  .post-entry {
    @apply mb-5 last:mb-0;
  }
}

---

// FILE: tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Courier New',
          'monospace',
        ],
      },
      colors: {
        gray: {
          900: '#1a1a1a', // text-primary
          600: '#555555', // text-secondary
          500: '#666666',
          400: '#888888', // text-tertiary
          300: '#d3d3d3', // border-color
          200: '#e8e8e8',
          100: '#f5f5f5',
        },
      },
      spacing: {
        gutter: 'clamp(1.5rem, 5vw, 2rem)',
      },
    },
  },
  plugins: [],
};

export default config;

---

// FILE: tsconfig.json (Ensure path aliases are set)
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}

---

// FILE: next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Built-in SWC minification
  compress: true,  // Gzip compression
  poweredByHeader: false,
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable', // 1 year for static assets
        },
      ],
    },
  ],
};

export default nextConfig;

---

// FILE: package.json (Dependencies)
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}

---

// FILE: components/Portfolio.tsx
// (Copy the full component from portfolio-brutalist.tsx)

---

// ===== OPTIONAL: Vercel Deployment =====

// FILE: vercel.json (for optimization)
{
  "buildCommand": "next build",
  "devCommand": "next dev",
  "outputDirectory": ".next/standalone",
  "framework": "nextjs"
}

// Deploy: vercel deploy --prod

---

// ===== OPTIONAL: Add a blog structure =====

// FILE: app/posts/[slug]/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post Title – Abdullah Ihtesham',
};

export default function Post({ params }: { params: { slug: string } }) {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 sm:px-8">
      <article>
        <h1 className="text-2xl font-semibold mb-2">Post Title</h1>
        <p className="text-gray-400 text-sm mb-8">Published: Date</p>
        <div className="prose prose-invert max-w-none">
          {/* Your content here */}
        </div>
      </article>
    </main>
  );
}

// FILE: app/posts/page.tsx (List all posts)
export default function PostsIndex() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 sm:px-8">
      <h1 className="text-2xl font-semibold mb-8">Posts</h1>
      {/* Map over posts array */}
    </main>
  );
}

---

// ===== ENVIRONMENT VARIABLES (if needed) =====

// FILE: .env.local
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G_XXXXX (if using Google Analytics)

---

// ===== BUILD & DEPLOY COMMANDS =====

# Development
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel (assumes vercel CLI installed)
vercel deploy --prod

---

// ===== PERFORMANCE CHECKLIST =====

✅ Font optimization: Google Fonts with display=swap
✅ Minification: Next.js SWC compiler
✅ Compression: gzip via next.config.ts
✅ Image optimization: (if adding images, use next/image)
✅ Dynamic imports: lazy load heavy components (optional)
✅ Cache headers: set in next.config.ts

Expected metrics:
- Lighthouse Performance: 95+
- FCP (First Contentful Paint): <500ms
- LCP (Largest Contentful Paint): <1s
- CLS (Cumulative Layout Shift): <0.1

---

// ===== QUICK START SUMMARY =====

1. Create new Next.js project:
   npx create-next-app@latest my-portfolio

2. Install Tailwind CSS:
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

3. Copy files:
   - Copy tailwind.config.ts from above
   - Copy app/globals.css from above
   - Copy components/Portfolio.tsx (from portfolio-brutalist.tsx)
   - Copy app/layout.tsx from above

4. Update metadata in layout.tsx with your info

5. Run:
   npm run dev

6. Deploy to Vercel:
   vercel deploy --prod

Done! Your brutalist portfolio is live.
