'use client'
import React from 'react'

import Image from 'next/image'

import CardContainer from './components/cardContainer/cardContainer'
import { Header } from './components/header'

export default function Home() {
  return (
    <>
      <main className="min-h-screen max-w-[90rem] flex flex-col justify-between items-center m-auto">
        <Header />
        <CardContainer />

        <footer className="w-screen bg-black px-0 py-5 text-white mt-auto">
          <div className="w-3/4 mx-auto flex bg-transparent justify-between items-end">
            <Image
              src="/img/logo_grupo.svg"
              width={70}
              height={52}
              alt="Logo"
            />
            <small>
              Grupo Plan Marketing (C) Todos os direitos reservados - 2025
            </small>
          </div>
        </footer>
      </main>
    </>
  )
}
