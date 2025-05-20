'use client'
import React from 'react'

import Image from 'next/image'

import CardContainer from './components/cardContainer/cardContainer'
import { Header } from './components/header'

export default function Home() {
  return (
    <>
      <main className="min-h-screen max-w-[90rem] flex flex-col justify-between items-center m-auto px-6">
        <Header />
        <CardContainer />
        <footer className="w-screen bg-black px-0 py-5 text-white mt-6 desktop:mt-0">
          <div className="w-full desktop:w-4/4 mx-auto flex bg-transparent justify-between items-end px-6 gap-10 ">
            <Image
              src="/img/logo_grupo.svg"
              width={70}
              height={52}
              alt="Logo"
            />
            <small className="">
              Grupo Plan Marketing (C) Todos os direitos reservados - 2025
            </small>
          </div>
        </footer>
      </main>
    </>
  )
}
