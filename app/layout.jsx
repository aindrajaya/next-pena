// These styles apply to every route in the application
import '../styles/tailwind.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from './providers'
import { Layout } from '../components/Layout'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})

export const metadata = {
  title: {
    template: '%s - Docs',
    default: 'Pena - Technical Writing as Subscription.',
  },
  description:
    'Subscribe to our documentation service and harness the power of pre-cached information.',
}
 
export default function RootLayout({ children }) {
  return (
    <html 
      lang="en"
      className={clsx('h-full antialiased', inter.variable, lexend.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white dark:bg-gray-950">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}