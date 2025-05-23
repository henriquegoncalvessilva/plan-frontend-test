import React from 'react'

import CardCountryContainer from './components/cardCountry/cardCountryContainer'

export default function Home() {
  return (
    <>
      <main className="max-w-[90rem] min-h-[37.5rem] flex flex-col justify-start items-center m-auto px-6 desktop:px-9 laptop:mb-[2.25rem] flex-grow">
        <CardCountryContainer />
      </main>
    </>
  )
}
