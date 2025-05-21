// app/details/[name]/page.tsx
import { getCountryByName } from '@/services/api'
import { Country } from '@/interfaces/IcardCountry'

type Props = {
  params: {
    name: string
  }
}

export default async function Details({ params }: Props) {
  const decodedName = decodeURIComponent(params.name)
  const country: Country = await getCountryByName(decodedName)

  return (
    <div>
      <h1>País selecionado: {country.translations.por.common}</h1>
      <p>Capital: {country.capital[0]}</p>
      <img
        src={country.flags.svg}
        alt={`Bandeira de ${country.name.common}`}
        width={100}
      />
    </div>
  )
}
