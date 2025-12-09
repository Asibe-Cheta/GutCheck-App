import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClientScript from "@/components/ClientScript";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'GutCheck - Visualize Your Intuition | AI-Powered Relationship Safety',
  description: 'Your private space to decode relationships and trust your instincts. AI-powered emotional intelligence for young adults.',
  keywords: 'relationship safety, manipulation detection, emotional intelligence, AI therapy, mental health',
  authors: [{ name: 'GutCheck Team' }],
  creator: 'GutCheck',
  publisher: 'GutCheck',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mygutcheck.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'GutCheck - Visualize Your Intuition',
    description: 'AI-powered relationship safety platform for young adults',
    url: 'https://mygutcheck.org',
    siteName: 'GutCheck',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GutCheck - Visualize Your Intuition',
    description: 'AI-powered relationship safety platform for young adults',
    creator: '@gutcheck',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <div className="bg-animation"></div>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ClientScript />
        <Analytics />
      </body>
    </html>
  );
}
