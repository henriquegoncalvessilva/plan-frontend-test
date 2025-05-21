'use client'
import React, { useRef, useState } from 'react'

import { ChevronDownIcon, SearchIcon } from 'lucide-react'
import Image from 'next/image'

import { useCountryStore } from '@/store/countryStore'
import { usePathname } from 'next/navigation'
import ContinentsFilter from './header/filters/continentsFilter'
import { LanguagesFilter } from './header/languagesFilter'

export const Header = () => {
  const [filter, setFilter] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const countryFilter = useCountryStore((state) => state.setFilterCountry)
  const languageFilter = useCountryStore((state) => state.setFilterLanguage)
  const pathname = usePathname()
  const shouldShowHeader = !pathname.startsWith('/details')

  const handleFilterCountry = () => {
    if (!inputRef.current) return
    countryFilter(inputRef.current?.value)
    setFilter('')
  }
  return (
    <>
      <header className="max-w-[80rem] flex-col laptop:w-full my-9 mx-auto h-fit flex items-center justify-center tablet:flex-col laptop:flex-row tablet:justify-start gap-4 flex-wrap laptop:px-6">
        <div className="flex desktop:justify-start items-start flex-1 shrink-0 max-w-[6.75rem]">
          <Image
            priority
            src="/img/logo.svg"
            width={108}
            height={59}
            alt="Logo"
          />
        </div>

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
                  className="pr-10 relative  w-[272px] font-semibold  desktop:w-[420px] h-[3.125rem] bg-transparent border-white border-solid border-4 rounded-2xl p-2 text-black placeholder:text-black"
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

            <div className="flex flex-wrap w-[280px] items-center justify-center tablet:flex-nowrap tablet:w-full tablet:justify-center gap-0 space-x-4 desktop:w-full  ">
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
      </header>
    </>
  )
}
