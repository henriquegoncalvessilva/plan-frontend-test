'use client'

import React, { useEffect } from 'react'

import { useCountryStore } from '@/store/countryStore'
import dynamic from 'next/dynamic'

const CardPagination = dynamic(
  () => import('./cardPagination/cardPagination'),
  {
    loading: () => null,
    ssr: false,
  },
)
const CardCountry = dynamic(() => import('./cardCountryItem/cardCountry'), {
  loading: () => null,
  ssr: false,
})
function paginate<T>(data: T[], page: number, perPage: number): T[] {
  const start = (page - 1) * perPage
  return data.slice(start, start + perPage)
}

export default function CardCountryContainer() {
  const fetchCountries = useCountryStore((state) => state.fetchCountries)
  const page = useCountryStore((state) => state.page)
  const countries = useCountryStore((state) => state.filteredCountries)
  const isLoading = useCountryStore((state) => state.isLoading)

  useEffect(() => {
    fetchCountries()
  }, [fetchCountries])

  const perPage = 8

  const totalPages = Math.ceil(countries.length / perPage)
  const currentPageCountries = paginate(countries, page, perPage)

  return (
    <>
      <section className="flex flex-wrap gap-5 w-full rounded-[20px] desktop:justify-center tablet: justify-content: center tablet:justify-center tablet:px-5 flex-1 items-center justify-center min-h-[33.5rem]">
        {isLoading ? (
          <h2 className="col-span-full text-center text-white text-2xl">
            Carregando...
          </h2>
        ) : currentPageCountries.length === 0 ? (
          <h2 className="col-span-full text-center text-white text-2xl">
            Nenhum país encontrado.
          </h2>
        ) : (
          currentPageCountries.map((country, index) => (
            <CardCountry key={index} country={country} />
          ))
        )}
      </section>
      {!isLoading && totalPages > 0 && (
        <CardPagination totalPages={totalPages} />
      )}
    </>
  )
}
