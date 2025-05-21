// app/details/[name]/page.tsx
import { getCountryByName } from '@/services/api'
import { Country } from '@/interfaces/IcardCountry'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  params: {
    name: string
  }
}

export default async function Details({ params }: Props) {
  const decodedName = decodeURIComponent(params.name)
  const country: Country = await getCountryByName(decodedName)
  const itensDetail = [
    {
      label: null,
      value: country.translations.por.common,
      className: 'text-xx2l font-semibold leading-none',
    },
    {
      label: 'Nome oficial:',
      value: country.translations.por.official,
    },
    {
      label: 'Capital:',
      value: country.capital,
    },
    {
      label: 'População:',
      value: country.population.toLocaleString('pt-BR') + ' habitantes',
    },
    {
      label: 'Moeda(s):',
      value:
        country.currencies && Object.values(country.currencies).length > 0
          ? Object.values(country.currencies)
              .map((c) => c.name)
              .join(', ')
          : 'Informação indisponível.',
    },
    {
      label: 'Idiomas:',
      value:
        country.languages && Object.values(country.languages).length > 0
          ? Object.values(country.languages).join(', ')
          : 'Informação indisponível.',
    },
    {
      label: 'Região:',
      value: country.region,
    },
    {
      label: 'Sub-Região:',
      value: country.subregion,
    },
  ]
  return (
    <>
      <div className="flex flex-col justify-start space-y-5 rounded-[20px] w-[80rem] h-[35.375rem] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] m-auto">
        <div className="bg-card-header-bg w-full h-12 text-white flex items-center justify-between p-5 rounded-t-[1.25rem]">
          <p>{country.continents[0]}</p>
          <div className="w-7 h-7 relative">
            <Image
              fill
              style={{ objectFit: 'contain' }}
              src={`/img/${country.region}.svg`}
              alt=""
            />
          </div>
        </div>
        <div className="flex px-5 justify-center h-full m-auto w-full">
          <div className="relative w-[18.125rem] h-[13.75rem] shrink-0">
            <Image
              fill
              className="object-contain"
              src={country.flags.svg}
              alt={
                country.flags.alt ||
                `Bandeira do país ${country.translations.por.common}`
              }
            />
          </div>
          <div className="text-card-text-color p-5 w-full h-full flex flex-col justify-center items-center gap-5 flex-grow-0">
            {itensDetail.map((item, index) => (
              <p
                key={index}
                className={
                  item.className || 'text-xl font-semibold leading-none'
                }>
                {item.label && (
                  <span className="font-normal mr-2">{item.label}</span>
                )}
                {item.value}
              </p>
            ))}
            <div
              className="h-full rounded-[20px]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)',
              }}></div>
            <div className="text-center z-50">
              <button className="text-white font-bold italic bg-primary w-[90%] tablet:w-[200px]  desktop:w-[16.875rem] h-12 rounded-[1.25rem] px-5">
                <Link href={`/`}>Voltar</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
