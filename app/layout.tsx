import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'Free Convert Case Tool Online | Uppercase, Lowercase & Title Case Converter – GoWebpy',
  description: 'Use GoWebpy’s free Convert Case Tool to instantly convert text into uppercase, lowercase, title case, sentence case, and more. Fast, responsive, and SEO-friendly online text converter.',
  keywords: 'free Convert Case Tool, Convert Case Tool, uppercase converter, lowercase converter, title case converter, sentence case, text converter online',
  authors: [{ name: 'GoWebpy' }],
  openGraph: {
    title: 'Free Convert Case Tool Online | GoWebpy',
    description: 'Instantly convert text to any case with GoWebpy. Free, fast, and secure.',
    siteName: 'GoWebpy',
    images: [{ url: 'https://picsum.photos/seed/gowebpy/1200/630' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Convert Case Tool Online | GoWebpy',
    description: 'Instantly convert text to any case with GoWebpy.',
    images: ['https://picsum.photos/seed/gowebpy/1200/630'],
  },
  alternates: {
    canonical: 'https://gowebpy.com',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-black text-white font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
