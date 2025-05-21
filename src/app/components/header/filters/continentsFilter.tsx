import { useCountryStore } from '@/store/countryStore'
import React, { useRef, useState } from 'react'
interface ContinentsFilterProps {
  filter: string
  setFilter: (value: string) => void
  inputRef: HTMLInputElement | null
}

const ContinentsFilter = ({
  filter,
  setFilter,
  inputRef,
}: ContinentsFilterProps) => {
  const continentFilter = useCountryStore((state) => state.setFilterContinent)
  const upperContinents = [
    { id: 'Africa', label: 'África' },
    { id: 'Europe', label: 'Europa' },
    { id: 'Oceania', label: 'Oceania' },
  ]
  const lowerContinents = [
    { id: 'Americas', label: 'Américas' },
    { id: 'Asia', label: 'Ásia' },
    { id: 'Antarctica', label: 'Antártida' },
  ]

  const handleFilter = (checked: boolean, value: string) => {
    if (checked) {
      continentFilter(value)
      setFilter(value)

      if (inputRef) inputRef.value = ''
    } else {
      continentFilter('')
      setFilter('')
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4 flex-1 tablet:flex-initial tablet:flex-row">
        {upperContinents.map((continent) => (
          <label
            key={continent.id}
            htmlFor={continent.id}
            className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              id={continent.id}
              name={continent.id}
              value={continent.id}
              checked={filter === continent.id}
              onChange={(e) => handleFilter(e.target.checked, e.target.value)}
              className="accent-black"
            />
            {continent.label}
          </label>
        ))}
      </div>
      <div className="flex flex-col gap-4 flex-1 tablet:flex-initial tablet:flex-row desktop:justify-center">
        {lowerContinents.map((continent) => (
          <label
            key={continent.id}
            htmlFor={continent.id}
            className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              id={continent.id}
              name={continent.id}
              value={continent.id}
              checked={filter === continent.id}
              onChange={(e) => handleFilter(e.target.checked, e.target.value)}
              className="accent-black"
            />
            {continent.label}
          </label>
        ))}
      </div>
    </>
  )
}

export default ContinentsFilter
