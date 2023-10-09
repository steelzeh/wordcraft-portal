import '@/styles/globals.scss'
import {Inter, Roboto_Mono} from "next/font/google";
import React from "react";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700'],
    variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
})

export const metadata = {
  title: 'Wordcraft',
  description: 'Rapid localization',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>
        <main>
          { children}
        </main>
      </body>
    </html>
  )
}
