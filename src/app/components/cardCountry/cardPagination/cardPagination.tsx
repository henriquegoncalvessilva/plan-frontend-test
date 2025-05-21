import React from 'react'

import { useCountryStore } from '@/store/countryStore'

type CardPaginationProps = {
  totalPages: number
}

const CardPagination = ({ totalPages }: CardPaginationProps) => {
  const page = useCountryStore((state) => state.page)
  const pageChange = useCountryStore((state) => state.pageChange)

  return (
    <>
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
              <polyline points="14 16 10 12 14 8" stroke="white" fill="none" />
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
              <polyline points="10 8 14 12 10 16" stroke="white" fill="none" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default CardPagination
