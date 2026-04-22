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
  title: 'GutChecks: Red Flags & Safety | Spot Manipulation in Any Interaction',
  description: 'The private app that helps you spot manipulation, red flags, and toxic behaviour — in DMs, dating, friendships, at work, with family, or anywhere online and offline. 100% anonymous.',
  keywords: 'red flags, manipulation, gaslighting, toxic, grooming, scam, workplace, dating, emotional abuse, narcissist, boundaries, coercive control, bullying, radicalisation, safety',
  authors: [{ name: 'GutChecks Team' }],
  creator: 'GutChecks',
  publisher: 'GutChecks',
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
    title: 'GutChecks: Red Flags & Safety',
    description: 'Spot manipulation, red flags, and toxic behaviour — in any interaction. 100% private and anonymous.',
    url: 'https://mygutcheck.org',
    siteName: 'GutChecks',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GutChecks: Red Flags & Safety',
    description: 'Spot manipulation, red flags, and toxic behaviour — in any interaction. 100% private and anonymous.',
    creator: '@gutchecksapp',
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
