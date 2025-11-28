import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'India News - Latest Updates & Breaking News',
  description: 'India’s most trusted news website. Get the latest updates on politics, sports, business, entertainment, technology, and trending stories.',
  keywords: 'India news, latest news, politics, sports, business, entertainment, technology',
  authors: [{ name: 'India News Team' }],
  openGraph: {
    title: 'India News - Latest Updates & Breaking News',
    description: 'India’s most trusted news website',
    url: 'https://indianews.com',
    siteName: 'India News',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'India News - Latest Updates & Breaking News',
    description: 'India’s most trusted news website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-zinc-50 dark:bg-zinc-950`}>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />

      </body>
    </html>
  );
}
