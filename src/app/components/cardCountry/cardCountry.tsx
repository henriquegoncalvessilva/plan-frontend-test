'use client'

import Image from 'next/image'

type CardCountryProps = {
  url?: string
  iconCountry?: string
  iconContinent?: string
  countryContinent?: string
  countryCapital?: string
  iconCapital?: string
  country: string
}

const CardCountry = ({
  url,
  iconCountry,
  countryContinent,
  iconCapital,
  iconContinent,
  countryCapital,
  country,
}: CardCountryProps) => {
  return (
    <>
      <div className="flex flex-col justify-start space-y-5 rounded-[1.25rem] w-[19.375rem] h-[14.875rem] bg-white  ">
        <div className="bg-card-header-bg w-full h-12 text-white flex items-center justify-between p-5 rounded-t-[1.25rem] ">
          <p>{countryContinent}</p>{' '}
          {/* <Image src="/img/logo.svg" alt="Icone do continente" /> */}
        </div>
        <div className="text-card-text-color p-5 w-full h-20 flex flex-col justify-center items-center gap-3">
          {/* <Image src={''} alt="Icone da bandeira do país"></Image> */}
          <p>{country}</p>
          <div className="flex gap-3">
            {/* <Image src={''} alt="Icone da capital do país"></Image>{' '} */}
            <p>{countryCapital}</p>
          </div>
        </div>
        <div className="text-center">
          <button className="text-white font-bold italic bg-primary w-[16.875rem] h-12 rounded-[1.25rem] px-5">
            Ver mais
          </button>
        </div>
      </div>
    </>
  )
}

export default CardCountry
