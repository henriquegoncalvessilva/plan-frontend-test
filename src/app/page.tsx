import React from 'react'

import Image from 'next/image'

import CardContainer from './components/cardContainer/cardContainer'

export default function Home() {
  return (
    <>
      <main className="min-h-screen max-w-[90rem] flex flex-col justify-between items-center m-auto">
        <header className="w-full h-24 px-16 py-9">
          <div>
            <Image src="/img/logo.svg" width={70} height={52} alt="Logo" />
          </div>
          <div></div>
        </header>
        <CardContainer />

        <footer className="bg-black w-full px-16 py-5 text-white">
          <Image src="/img/logo_grupo.svg" width={70} height={52} alt="Logo" />
        </footer>
      </main>
    </>
  )
}
