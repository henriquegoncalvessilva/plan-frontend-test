'use client'
import React from 'react'

import Image from 'next/image'

import { Country } from '@/interfaces/IcardCountry'
import Link from 'next/link'

type CardCountryProps = {
  country: Country
}

const CardCountryItem = React.memo(({ country }: CardCountryProps) => {
  return (
    <div className="flex flex-col justify-start space-y-5 rounded-[20px] w-[310px] h-[14.875rem] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
      <div className="bg-card-header-bg w-full h-12 text-white flex items-center justify-between p-5 rounded-t-[1.25rem]">
        <p>{country.continents[0]}</p>
        <div className="w-7 h-7 relative">
          <Image
            fill
            style={{ objectFit: 'contain' }}
            src={`/img/${country.region}.svg`}
            alt=""
          />
        </div>
      </div>
      <div className="text-card-text-color p-5 w-full h-20 flex flex-col justify-center items-center gap-3 ">
        <div className="relative w-7 h-7 shrink-0">
          <Image
            fill
            className="object-contain"
            src={country.flags.svg}
            alt={
              country.flags.alt ||
              `Bandeira do país ${country.translations.por.common}`
            }
          />
        </div>
        <p className="text-xl font-semibold leading-none">
          {country.translations.por.common.length > 20
            ? country.translations.por.common.slice(0, 20) + '...'
            : country.translations.por.common}
        </p>

        <div className="text-md font-semibold flex gap-2 items-center">
          <Image
            width={20}
            height={20}
            src={'/img/capital_icon.svg'}
            alt="Icone generico de capital"
          />
          {country.capital}
        </div>
      </div>
      <div
        className="h-full rounded-[20px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)',
        }}>
        <div className="text-center z-50">
          <button className="text-white font-bold italic bg-primary w-[90%] tablet:w-[200px]  desktop:w-[16.875rem] h-12 rounded-[1.25rem] px-5">
            <Link href={`/details/${country.name.common}`}>Ver mais</Link>
          </button>
        </div>
      </div>
    </div>
  )
})

export default React.memo(CardCountryItem)
