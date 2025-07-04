import type { Metadata } from 'next';
import { Poppins, Noto_Sans_Bengali } from 'next/font/google';

import './globals.css';
import Header from '@/components/custom/header/Header';
// import Sidebar from '@/components/custom/sidebar/Sidebar';
// import { ScrollArea } from '@/components/ui/scroll-area';

const noto_sans_bengali = Noto_Sans_Bengali({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-noto-sans-bengali',
});
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://bethelp24.com',
  ),
  title: {
    default: 'BetHelp24 | Earn Money Using Smart Betting Strategies',
    template: '%s | BetHelp24: Earn Money Using Strategies',
  },
  description: process.env.SEO_DESCRIPTION!,
  keywords: ['BetHelp24', 'gaming'].join(', '),
  openGraph: {
    type: 'website',
    locale: 'en_BD',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://bethelp24.com',
    siteName: 'BetHelp24',
    title: 'BetHelp24 - Earn Money Using Smart Betting Strategies',
    description: process.env.SEO_DESCRIPTION!,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'BetHelp24 - Earn Money Using Smart Betting Strategies',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bethelp24',
    creator: '@bethelp24',
    title: 'BetHelp24 - Earn Money Using Smart Betting Strategies',
    description: process.env.SEO_DESCRIPTION!,
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://bethelp24.com',
    languages: {
      en: `${process.env.NEXT_PUBLIC_SITE_URL}/en`,
      bn: `${process.env.NEXT_PUBLIC_SITE_URL}/bn`,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${noto_sans_bengali.variable} ${poppins.variable} poppins antialiased`}
      >
        <div className=' bg-bet365-dark text-white'>
          <Header />
          <div className='h-full'>

         {children}
          </div>
        </div>
      </body>
    </html>
  );
}
