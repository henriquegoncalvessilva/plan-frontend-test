import React from 'react'

import CardContainer from './components/cardContainer/cardContainer'

export default function Home() {
  return (
    <>
      <main className="max-w-[90rem] flex flex-col justify-start items-center m-auto px-6 tablet:px-0">
        <CardContainer />
      </main>
    </>
  )
}
