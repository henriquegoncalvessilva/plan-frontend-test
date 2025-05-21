import { create } from 'zustand'

import { Country } from '@/interfaces/IcardCountry'
import { getData } from '@/services/api'

import { CountryState } from './Istore'

export const useCountryStore = create<CountryState>((set, get) => ({
  countries: [] as Country[],
  filteredCountries: [],
  filterContinent: '',
  isLoading: true,
  continentFilter: '',
  page: 1,
  filterCountry: '',
  filterLanguage: '',

  setFilterLanguage: (value: string) => {
    const { countries } = get()
    const filtered =
      value === ''
        ? countries
        : countries.filter((country) => {
            if (!country.languages) return false
            return Object.values(country.languages).includes(value)
          })

    console.log(filtered)

    set({ filterLanguage: value, filteredCountries: filtered, page: 1 })
  },
  setFilterCountry: (value: string) => {
    const { countries } = get()

    const filtered =
      value === ''
        ? countries
        : countries.filter(
            ({ translations }) =>
              translations.por.common.toLowerCase().trim() ===
              value.toLowerCase().trim(),
          )
    console.log(filtered)
    set({ filterCountry: value, filteredCountries: filtered, page: 1 })
  },

  pageChange: (numberPage: number) => {
    set({ page: numberPage })
  },

  fetchCountries: async () => {
    try {
      set({ isLoading: true })

      const data = await getData()

      set({
        countries: data,
        filteredCountries: data,
        isLoading: false,
      })
    } catch (error) {
      console.error('Erro ao buscar países:', error)
      set({ isLoading: false })
    }
  },

  setCountries: (countries) =>
    set(() => ({
      countries,
      filteredCountries: countries,
    })),

  setFilterContinent: (continent) => {
    const { countries } = get()

    const filtered =
      continent === ''
        ? countries
        : countries.filter(({ region }) => region === continent)

    set({ filterContinent: continent, filteredCountries: filtered, page: 1 })
  },
}))
