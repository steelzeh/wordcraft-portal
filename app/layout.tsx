import '@/styles/globals.scss';
import { Nunito } from 'next/font/google';
import React from 'react';

const main = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-main',
});

export const metadata = {
  title: 'Wordcraft',
  description: 'Rapid localization',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="brand" lang="en" className={`${main.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
