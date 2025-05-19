'use client'
import React, { useRef, useState } from 'react'

import Image from 'next/image'

import { useCountryStore } from '@/store/countryStore'

export const Header = () => {
  const [filter, setFilter] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const continentFilter = useCountryStore((state) => state.setFilterContinent)
  const countryFilter = useCountryStore((state) => state.setFilterCountry)

  const handleFilter = (checked: boolean, value: string) => {
    if (checked) {
      continentFilter(value)
      setFilter(value)
      if (inputRef.current) inputRef.current.value = ''
    } else {
      continentFilter('')
      setFilter('')
    }
  }

  const handleFilterCountry = () => {
    if (!inputRef.current) return
    countryFilter(inputRef.current?.value)
    setFilter('')
  }

  return (
    <>
      <header className="w-full h-24 px-16 py-9">
        <input ref={inputRef} type="text" placeholder="Digite aqui" />
        <button
          className="ml-2 px-4 py-2 bg-black text-white rounded"
          onClick={() => handleFilterCountry()}>
          Filtrar
        </button>
        <div className="flex">
          <Image src="/img/logo.svg" width={70} height={52} alt="Logo" />

          <label
            htmlFor="Africa"
            className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              id="Africa"
              name="Africa"
              value="Africa"
              checked={filter === 'Africa'}
              onChange={(e) => handleFilter(e.target.checked, e.target.value)}
              className="accent-black"
            />
            África
          </label>
          <label
            htmlFor="Americas"
            className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              id="Americas"
              name="Americas"
              value="Americas"
              checked={filter === 'Americas'}
              onChange={(e) => handleFilter(e.target.checked, e.target.value)}
              className="accent-black"
            />
            Américas
          </label>
          <label
            htmlFor="Europe"
            className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              id="Europe"
              name="Europe"
              value="Europe"
              checked={filter === 'Europe'}
              onChange={(e) => handleFilter(e.target.checked, e.target.value)}
              className="accent-black"
            />
            Europa
          </label>
          <label
            htmlFor="Asia"
            className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              id="Asia"
              name="Asia"
              value="Asia"
              checked={filter === 'Asia'}
              onChange={(e) => handleFilter(e.target.checked, e.target.value)}
              className="accent-black"
            />
            Ásia
          </label>
          <label
            htmlFor="Oceania"
            className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              id="Oceania"
              name="Oceania"
              value="Oceania"
              checked={filter === 'Oceania'}
              onChange={(e) => handleFilter(e.target.checked, e.target.value)}
              className="accent-black"
            />
            Oceania
          </label>
          <label
            htmlFor="Antarctica"
            className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              id="Antarctica"
              name="Antarctica"
              value="Antarctica"
              checked={filter === 'Antarctica'}
              onChange={(e) => handleFilter(e.target.checked, e.target.value)}
              className="accent-black"
            />
            Antártida
          </label>
        </div>
      </header>
    </>
  )
}
