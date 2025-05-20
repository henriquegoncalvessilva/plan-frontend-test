'use client'
import React from 'react'

import Image from 'next/image'

import { Country } from '@/interfaces/IcardCountry'

type CardCountryProps = {
  country: Country
}

const CardCountry = React.memo(({ country }: CardCountryProps) => {
  return (
    <div className="flex flex-col justify-start space-y-5 rounded-[20px] w-[310px] h-[14.875rem] bg-white">
      <div className="bg-card-header-bg w-full h-12 text-white flex items-center justify-between p-5 rounded-t-[1.25rem]">
        <p>{country.continents[0]}</p>
        <Image
          width={29}
          height={38}
          src={`/img/${country.region}.svg`}
          alt=""
        />
      </div>
      <div className="text-card-text-color p-5 w-full h-20 flex flex-col justify-center items-center gap-3">
        <Image
          width={27}
          height={18}
          src={country.flags.svg}
          alt="Icone da capital do país"
        />
        <p className="text-xl font-semibold leading-none">
          {country.translations.por.common.length > 20
            ? country.translations.por.common.slice(0, 20) + '...'
            : country.translations.por.common}
        </p>

        <span className="text-md font-semibold">{country.capital}</span>
      </div>
      <div className="text-center">
        <button className="text-white font-bold italic bg-primary w-[90%] tablet:w-[200px]  desktop:w-[16.875rem] h-12 rounded-[1.25rem] px-5">
          Ver mais
        </button>
      </div>
    </div>
  )
})

export default React.memo(CardCountry)
