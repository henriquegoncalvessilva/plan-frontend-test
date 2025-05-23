'use client'
import React, { useRef, useState } from 'react'

import { SearchIcon } from 'lucide-react'
import Image from 'next/image'

import { useCountryStore } from '@/store/countryStore'
import { usePathname } from 'next/navigation'

import ContinentsFilter from './filters/continentsFilter'
import { LanguagesFilter } from './languagesFilter'

export const Header = () => {
  const [filter, setFilter] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const countryFilter = useCountryStore((state) => state.setFilterCountry)
  const pathname = usePathname()
  const shouldShowHeader = !pathname.startsWith('/details')

  const handleFilterCountry = () => {
    if (!inputRef.current) return
    countryFilter(inputRef.current?.value)
    setFilter('')
  }
  return (
    <>
      <header className="w-full max-w-[80rem] flex-col laptop:w-full my-9 mx-auto h-fit flex items-center justify-center tablet:flex-row laptop:flex-row tablet:justify-start gap-4 flex-wrap laptop:px-6 tablet:px-6 desktop:flex-row tablet:justify-center ">
        <div className="flex flex-col desktop:flex-row items-center gap-4 laptop:flex laptop:flex-row laptop:w-full laptop:max-w-[79.25rem] laptop:items-center ">
          <section className="flex  desktop:justify-start items-start flex-1 shrink-0 max-w-[6.75rem]">
            <Image
              priority
              src="/img/logo.svg"
              width={108}
              height={59}
              alt="Logo"
            />
          </section>

          {shouldShowHeader ? (
            <section className="tablet:w-fit space-y-5 flex flex-col items-center tablet:m-auto  desktop:justify-center desktop:max-w-[53.75rem]">
              <div className="flex-wrap tablet:w-fit flex gap-5 items-center justify-center ">
                <div className="flex items-center justify-center relative w-fit">
                  <input
                    ref={inputRef}
                    type="text"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleFilterCountry()
                    }}
                    placeholder="Digite aqui"
                    className="pr-10 relative  w-[17rem] font-semibold  desktop:w-[26.25rem] h-[3.125rem] bg-transparent border-white border-solid border-4 rounded-2xl p-2 text-black placeholder:text-black"
                  />
                  <SearchIcon
                    className="absolute right-0 mr-4 text-white cursor-pointer"
                    onClick={() => handleFilterCountry()}
                  />
                </div>
                <LanguagesFilter
                  setFilter={setFilter}
                  inputRef={inputRef.current}
                />
              </div>

              <div className="flex flex-wrap w-[17.5rem] items-center justify-center tablet:flex-nowrap tablet:w-full tablet:justify-center gap-0 space-x-4 desktop:w-full  ">
                <ContinentsFilter
                  filter={filter}
                  setFilter={setFilter}
                  inputRef={inputRef.current}
                />
              </div>
            </section>
          ) : (
            ''
          )}
        </div>
      </header>
    </>
  )
}
