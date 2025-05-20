import { Country } from '@/interfaces/IcardCountry'

export interface CountryState {
  countries: Country[]
  filteredCountries: Country[]
  filterContinent: string
  filterLanguage: string
  setCountries: (countries: Country[]) => void
  setFilterContinent: (continent: string) => void
  pageChange: (numberPage: number) => void
  setFilterCountry: (country: string) => void
  setFilterLanguage: (country: string) => void
  isLoading: boolean
  fetchCountries: () => Promise<void>
  continentFilter: string
  page: number
  filterCountry: string
}
