import type { Metadata } from 'next';
import './globals.css';
import type { FC } from 'react';
import React from 'react';
import localFont from 'next/font/local';
import { Toaster } from 'react-hot-toast';

const helvetica = localFont({
  src: [
    {
      path: '../../public/fonts/HelveticaNeue-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HelveticaNeue-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HelveticaNeue-Roman.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shumskayakate.com/'),
  title: {
    default: 'KATE SHUMSKAYA',
    template: '%s | KATE SHUMSKAYA',
  },
  description: 'Professional content creator and influencer',
  keywords: [
    'Kate Shumskaya',
    'Shumskaya Kate',
    'Kate',
    'Shumskaya',
    'Екатерина Шумская',
    'Шумская Екатерина',
    'Екатерина',
    'Шумская',
    'content creator',
    'influencer',
    'social media',
    'digital content',
    'creator',
  ],
  openGraph: {
    title: 'KATE SHUMSKAYA',
    description: 'Professional content creator and influencer',
    url: 'https://shumskayakate.com/',
    siteName: 'Kate Shumskaya',
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Kate Shumskaya',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

const RootLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en">
      <Toaster position="bottom-right" />
      <body className={`${helvetica.className} antialiased`}>{children}</body>
    </html>
  );
};
export default RootLayout;
