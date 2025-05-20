import React from 'react'

import type { Metadata } from 'next'
import { Exo } from 'next/font/google'

import '@/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

const exo = Exo({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Plan',
  description: 'Template for a Next.js app with TypeScript and Sass',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={exo.className}>
      <body>{children}</body>
    </html>
  )
}
