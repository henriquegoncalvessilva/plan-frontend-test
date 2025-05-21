'use client'
import React, { useRef, useState } from 'react'

import { ChevronDown, ChevronDownIcon, SearchIcon } from 'lucide-react'
import Image from 'next/image'

import { useCountryStore } from '@/store/countryStore'

export const Header = () => {
  const [filter, setFilter] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const continentFilter = useCountryStore((state) => state.setFilterContinent)
  const countryFilter = useCountryStore((state) => state.setFilterCountry)
  const languageFilter = useCountryStore((state) => state.setFilterLanguage)

  const languageOptions: string[] = [
    'Abkhazian',
    'Afrikaans',
    'Akan',
    'Amharic',
    'Arabic',
    'Aragonese',
    'Assamese',
    'Avaric',
    'Avestan',
    'Aymara',
    'Azerbaijani',
    'Bashkir',
    'Bambara',
    'Belarusian',
    'Bengali',
    'Bislama',
    'Bosnian',
    'Breton',
    'Bulgarian',
    'Catalan',
    'Czech',
    'Chamorro',
    'Chechen',
    'Church Slavic',
    'Chuvash',
    'Cornish',
    'Corsican',
    'Cree',
    'Welsh',
    'Danish',
    'German',
    'Divehi',
    'Dzongkha',
    'Greek',
    'English',
    'Esperanto',
    'Estonian',
    'Basque',
    'Ewe',
    'Faroese',
    'Persian',
    'Fijian',
    'Finnish',
    'French',
    'Western Frisian',
    'Fulah',
    'Scottish Gaelic',
    'Irish',
    'Galician',
    'Manx',
    'Guarani',
    'Gujarati',
    'Haitian',
    'Hausa',
    'Hebrew',
    'Herero',
    'Hindi',
    'Hiri Motu',
    'Croatian',
    'Hungarian',
    'Armenian',
    'Igbo',
    'Ido',
    'Sichuan Yi',
    'Inuktitut',
    'Interlingue',
    'Interlingua',
    'Indonesian',
    'Inupiaq',
    'Icelandic',
    'Italian',
    'Javanese',
    'Japanese',
    'Kalaallisut',
    'Kannada',
    'Kashmiri',
    'Georgian',
    'Kanuri',
    'Kazakh',
    'Khmer',
    'Kikuyu',
    'Kinyarwanda',
    'Kirghiz',
    'Komi',
    'Kongo',
    'Korean',
    'Kuanyama',
    'Kurdish',
    'Lao',
    'Latin',
    'Latvian',
    'Limburgish',
    'Lingala',
    'Lithuanian',
    'Luxembourgish',
    'Luba-Katanga',
    'Ganda',
    'Malayalam',
    'Marathi',
    'Macedonian',
    'Malagasy',
    'Maltese',
    'Mongolian',
    'Maori',
    'Malay',
    'Burmese',
    'Nauru',
    'Navajo',
    'North Ndebele',
    'Ndonga',
    'Nepali',
    'Dutch',
    'Norwegian Nynorsk',
    'Norwegian Bokmål',
    'Norwegian',
    'Chichewa',
    'Occitan',
    'Ojibwa',
    'Oriya',
    'Oromo',
    'Ossetian',
    'Panjabi',
    'Pali',
    'Polish',
    'Portuguese',
    'Pashto',
    'Quechua',
    'Romansh',
    'Romanian',
    'Rundi',
    'Russian',
    'Sango',
    'Sanskrit',
    'Sinhala',
    'Slovak',
    'Slovenian',
    'Northern Sami',
    'Samoan',
    'Shona',
    'Sindhi',
    'Somali',
    'Southern Sotho',
    'Spanish',
    'Albanian',
    'Sardinian',
    'Serbian',
    'Swati',
    'Sundanese',
    'Swahili',
    'Swedish',
    'Tamil',
    'Tatar',
    'Telugu',
    'Tajik',
    'Tagalog',
    'Thai',
    'Tigrinya',
    'Tonga',
    'Tswana',
    'Tsonga',
    'Turkmen',
    'Turkish',
    'Twi',
    'Uighur',
    'Ukrainian',
    'Urdu',
    'Uzbek',
    'Venda',
    'Vietnamese',
    'Volapük',
    'Walloon',
    'Wolof',
    'Xhosa',
    'Yiddish',
    'Yoruba',
    'Zhuang',
    'Chinese',
    'Zulu',
  ]

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

  const handleSelecteFilterCountry = (value: string) => {
    languageFilter(value)
    console.log(value)
  }

  return (
    <>
      <header className="max-w-[80rem] desktop:w-full my-9 mx-auto h-fit flex flex-row items-center justify-center gap-4 flex-wrap tablet:space-x-10">
        <Image
          priority
          src="/img/logo.svg"
          width={108}
          height={59}
          alt="Logo"
        />

        <section className="tablet:w-fit space-y-5 flex flex-col items-center tablet:m-auto">
          <div className="flex-wrap tablet:w-fit flex gap-5 items-center justify-center ">
            <div className="flex items-center justify-center relative w-fit">
              <input
                ref={inputRef}
                type="text"
                placeholder="Digite aqui"
                className="pr-10 relative  w-[272px] font-semibold  desktop:w-[420px] h-[3.125rem] bg-transparent border-white border-solid border-4 rounded-2xl p-2 text-black placeholder:text-black"
              />
              <SearchIcon
                className="absolute right-0 mr-4 text-white cursor-pointer"
                onClick={() => handleFilterCountry()}
              />
            </div>
            <div className="flex items-center justify-center relative w-fit">
              <select
                name="language"
                id="language"
                className="pr-10 font-semibold  w-[272px] relative h-[3.125rem] bg-transparent border-white border-solid border-4 rounded-2xl p-2 text-black placeholder:text-black"
                onChange={(e) => handleSelecteFilterCountry(e.target.value)}>
                <option value="" disabled defaultChecked>
                  Selecione um idioma
                </option>
                <option value="">Todos</option>
                {languageOptions.map((language) => (
                  <option key={language} value={language} title={language}>
                    {language}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="absolute text-white right-2" />
            </div>
          </div>

          <div className="flex flex-wrap w-[280px] items-center justify-center tablet:flex-nowrap tablet:w-full tablet:justify-center gap-0 space-x-4 desktop:w-full desktop:justify-start ">
            <div className="flex flex-col gap-4 flex-1 tablet:flex-initial tablet:flex-row">
              <label
                htmlFor="Africa"
                className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  id="Africa"
                  name="Africa"
                  value="Africa"
                  checked={filter === 'Africa'}
                  onChange={(e) =>
                    handleFilter(e.target.checked, e.target.value)
                  }
                  className="accent-black"
                />
                África
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
                  onChange={(e) =>
                    handleFilter(e.target.checked, e.target.value)
                  }
                  className="accent-black"
                />
                Europa
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
                  onChange={(e) =>
                    handleFilter(e.target.checked, e.target.value)
                  }
                  className="accent-black"
                />
                Oceania
              </label>
            </div>
            <div className="flex flex-col gap-4 flex-1 tablet:flex-initial tablet:flex-row  ">
              <label
                htmlFor="Americas"
                className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  id="Americas"
                  name="Americas"
                  value="Americas"
                  checked={filter === 'Americas'}
                  onChange={(e) =>
                    handleFilter(e.target.checked, e.target.value)
                  }
                  className="accent-black"
                />
                Américas
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
                  onChange={(e) =>
                    handleFilter(e.target.checked, e.target.value)
                  }
                  className="accent-black"
                />
                Ásia
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
                  onChange={(e) =>
                    handleFilter(e.target.checked, e.target.value)
                  }
                  className="accent-black"
                />
                Antártida
              </label>
            </div>
          </div>
        </section>
      </header>
    </>
  )
}
