import { getCountryByName } from '@/services/api'
import { Country } from '@/interfaces/IcardCountry'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  params: Promise<{ name: string }>
}

export default async function Details({ params }: Props) {
  const decodedName = decodeURIComponent((await params).name)
  const country: Country = await getCountryByName(decodedName)
  const itensDetail = [
    {
      label: null,
      value: country.translations.por.common,
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
      <section className="px-4 relative tablet:mb-[10.5rem] laptop:mb-[8.75rem]">
        <div className="flex flex-col desktop:flex-col justify-start space-y-5 rounded-[1.25rem] max-w-[80rem] h-full bg-white shadow-[0_0.25rem_0.625rem_rgba(0,0,0,0.2)] m-auto">
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
          <div className="flex flex-col laptop:flex-row items-center laptop:items-start px-5 justify-center h-full m-auto w-full desktop:flex-row desktop:m-0 desktop:items-start">
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
            <div className="text-card-text-color p-5 w-full h-full flex flex-col justify-center items-center gap-5 flex-grow-0 desktop:text-center">
              {itensDetail.map((item, index) =>
                item.label === null ? (
                  <h1 key={index} className="text-xx2l font-semibold">
                    <span>{item.value}</span>
                  </h1>
                ) : (
                  <div className="w-full laptop:w-fit" key={index}>
                    <span className="text-xl mr-2 font-semibold">
                      {item.label}
                    </span>
                    <span className="text-xl">{item.value}</span>
                  </div>
                ),
              )}
              <div
                className="h-full rounded-[1.25rem]"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)',
                }}></div>
              <div className="text-center z-50 w-full">
                <button className="text-white font-bold italic bg-primary w-[90%] tablet:w-[200px]  desktop:w-[16.875rem] h-12 rounded-[1.25rem] px-5">
                  <Link className="w-full block" href={`/`}>
                    Voltar
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
