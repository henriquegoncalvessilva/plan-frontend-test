import Image from 'next/image'
import React from 'react'
import CardCountry from './components/cardCountry/cardCountry'
import CardContainer from './components/cardContainer/cardContainer'

export default function Home() {
  return (
    <>
      <main className="max-w-[90rem] flex flex-col justify-between items-center m-auto bg-page-gradient h-dvh ">
        <header className="bg-header-gradient w-full h-24 px-16 py-9">
          <div>
            <Image src="/img/logo.svg" width={70} height={52} alt="Logo" />
          </div>
          <div></div>
        </header>
        <CardContainer />
        <section className="h-[3.1875rem] w-64 bg-white m-0"></section>

        <footer className="bg-black w-full px-16 py-5 text-white">
          <Image src="/img/logo_grupo.svg" width={70} height={52} alt="Logo" />
        </footer>
      </main>
    </>
  )
}
