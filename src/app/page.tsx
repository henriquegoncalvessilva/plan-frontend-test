import React from 'react'

import CardContainer from './components/cardContainer/cardContainer'
import Footer from './components/footer/footer'
import { Header } from './components/header'

export default function Home() {
  return (
    <>
      <main className="min-h-screen max-w-[90rem] flex flex-col justify-between items-center m-auto px-6">
        <Header />
        <CardContainer />
        <Footer />
      </main>
    </>
  )
}
