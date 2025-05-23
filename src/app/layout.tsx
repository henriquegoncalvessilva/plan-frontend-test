import React from 'react'

import type { Metadata } from 'next'
import { Exo } from 'next/font/google'

import '@/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/footer/footer'
import { Header } from './components/header/header'

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
    <html lang="pt-BR" className={`${exo.className}`}>
      <body className="tablet:h-full tablet:flex tablet:flex-col laptop:h-full m-0 laptop:min-h-screen laptop:flex laptop:flex-col desktop:h-full desktop:min-h-screen desktop:flex desktop:flex-col">
        <Header />
        {children} <Footer />
      </body>
    </html>
  )
}
