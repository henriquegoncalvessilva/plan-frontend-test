import { Country } from '@/interfaces/IcardCountry'
// export interface Country {
//   name: { common: string }
//   capital: string[]
//   region: string
//   flags: { png: string }
// }

export interface CountryState {
  countries: Country[]
  filteredCountries: Country[]
  filterContinent: string
  setCountries: (countries: Country[]) => void
  setFilterContinent: (continent: string) => void
  pageChange: (numberPage: number) => void
  setFilterCountry: (country: string) => void
  isLoading: boolean
  fetchCountries: () => Promise<void>
  continentFilter: string
  page: number
  filterCountry: string
}
