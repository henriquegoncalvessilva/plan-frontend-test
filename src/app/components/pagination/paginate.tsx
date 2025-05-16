'use client'

import React, { useState } from 'react'

import CardCountry from '../cardCountry/cardCountry'

interface Props {
  data: any[]
}

function paginate<T>(data: T[], page: number, perPage: number): T[] {
  const start = (page - 1) * perPage
  return data.slice(start, start + perPage)
}

export default function CardCountryClient({ data }: Props) {
  const [page, setPage] = useState(1)
  const perPage = 8
  const currentPageCountries = paginate(data, page, perPage)

  return (
    <>
      <section className="grid grid-cols-1 gap-5 tablet:grid-cols-2 desktop:grid-cols-4 w-full rounded-[20px]">
        {currentPageCountries.map((country: any) => (
          <CardCountry
            key={country.name.common}
            url={country.flags.png}
            country={country.name.common}
            countryCapital={country.capital}
            countryContinent={country.region}
            iconCountry={country.flags.png}
            iconCapital="/img/icon_capital.svg"
            iconContinent="/img/icon_continent.svg"
          />
        ))}
      </section>

      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-transparent disabled:opacity-50"
          disabled={page === 1}
          aria-label="Página Anterior">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="11" stroke="white" fill="none" />
            <polyline points="14 16 10 12 14 8" stroke="white" fill="none" />
          </svg>
        </button>
        <div className="flex gap-2">
          {Array.from({ length: Math.ceil(data.length / perPage) }).map(
            (_, idx) => {
              const pageIndex = idx + 1
              const isActive = page === pageIndex
              return (
                <button
                  key={pageIndex}
                  onClick={() => setPage(pageIndex)}
                  className={`w-3 h-3 rounded-full border-2 transition-colors ${
                    isActive
                      ? 'bg-primary border-primary'
                      : 'bg-white border-primary'
                  }`}
                  aria-label={`Página ${pageIndex}`}
                />
              )
            },
          )}
        </div>
        <button
          onClick={() =>
            setPage((prevPage) =>
              Math.min(prevPage + 1, Math.ceil(data.length / perPage)),
            )
          }
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-transparent disabled:opacity-50"
          disabled={page === Math.ceil(data.length / perPage)}
          aria-label="Próxima Página">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="11" stroke="white" fill="none" />
            <polyline points="10 8 14 12 10 16" stroke="white" fill="none" />
          </svg>
        </button>
      </div>
    </>
  )
}
