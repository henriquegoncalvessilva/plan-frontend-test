'use client'

import React, { useEffect } from 'react'

import { useCountryStore } from '@/store/countryStore'

const CardCountry = React.lazy(() => import('./cardCountryItem/cardCountry'))

function paginate<T>(data: T[], page: number, perPage: number): T[] {
  const start = (page - 1) * perPage
  return data.slice(start, start + perPage)
}

export default function CardCountryContainer() {
  const fetchCountries = useCountryStore((state) => state.fetchCountries)
  const pageChange = useCountryStore((state) => state.pageChange)
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
        <React.Suspense
          fallback={
            <p className="col-span-full text-center text-white text-2xl">
              Carregando...
            </p>
          }>
          {!isLoading && currentPageCountries.length === 0 ? (
            <h2 className="col-span-full text-center text-white text-2xl">
              Nenhum país encontrado.
            </h2>
          ) : (
            currentPageCountries.map((country, index) => (
              <CardCountry key={index} country={country} />
            ))
          )}
        </React.Suspense>
      </section>
      {!isLoading && totalPages > 0 && (
        <div className="col-span-full laptop:mt-8">
          <div className="flex justify-center items-center mt-6  mb-6 gap-4">
            <button
              onClick={() => pageChange(Math.max(page - 1, 1))}
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
                <polyline
                  points="14 16 10 12 14 8"
                  stroke="white"
                  fill="none"
                />
              </svg>
            </button>

            <span className="text-white text-sm">
              {page} / {totalPages}
            </span>

            <button
              onClick={() => pageChange(Math.min(page + 1, totalPages))}
              className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-transparent disabled:opacity-50"
              disabled={page === totalPages}
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
                <polyline
                  points="10 8 14 12 10 16"
                  stroke="white"
                  fill="none"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
