'use client'
import React from 'react'

import Image from 'next/image'

type CardCountryProps = {
  url?: string
  iconCountry: string
  iconContinent?: string
  countryContinent: CardCountrys['countryImage']
  countryCapital?: string
  iconCapital?: string
  country: string
}

interface CardCountrys {
  countryImage:
    | 'Africa'
    | 'America'
    | 'Asia'
    | 'Europe'
    | 'Oceania'
    | 'Antarctica'
    | null
}

const CardCountry = ({
  url,
  iconCountry,
  countryContinent,
  iconCapital,
  iconContinent,
  countryCapital,
  country,
}: CardCountryProps) => {
  return (
    <>
      <div className="flex flex-col justify-start space-y-5 rounded-[20px] desktop:w-[310px] h-[14.875rem] bg-white   ">
        <div className="bg-card-header-bg w-full h-12 text-white flex items-center justify-between p-5 rounded-t-[1.25rem] ">
          <p>{countryContinent}</p>
          <Image
            width={29}
            height={38}
            src={`/img/${countryContinent}.svg`}
            alt=""></Image>
        </div>
        <div className="text-card-text-color p-5 w-full h-20 flex flex-col justify-center items-center gap-3">
          <Image
            width={27}
            height={18}
            src={iconCountry}
            alt="Icone da capital do país"></Image>{' '}
          <p>{country}</p>
          <div className="flex gap-3">
            <p>{countryCapital}</p>
          </div>
        </div>
        <div className="text-center">
          <button className="text-white font-bold italic bg-primary w-[90%] tablet:w-[200px]  desktop:w-[16.875rem] h-12 rounded-[1.25rem] px-5">
            Ver mais
          </button>
        </div>
      </div>
    </>
  )
}

export default CardCountry
