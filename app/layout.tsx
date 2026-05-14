import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Huda Muhammad Nur Fauzi — Portofolio',
  description:
    'Seorang kreator lintas disiplin dari Garut, Jawa Barat. Memadukan Seni Fotografi, Rekayasa Teknologi (Fullstack & IoT), dan Gaya Hidup Berkelanjutan.',
  keywords: ['fotografi', 'wedding', 'fullstack', 'IoT', 'aquaponik', 'sustainability', 'Garut'],
  authors: [{ name: 'Huda Muhammad Nur Fauzi' }],
  openGraph: {
    title: 'Huda Muhammad Nur Fauzi — Portofolio',
    description: 'Kreator lintas disiplin: Fotografi, Teknologi, & Ketahanan Pangan.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
