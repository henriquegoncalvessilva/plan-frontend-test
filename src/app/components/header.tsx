'use client'
import React, { useRef, useState } from 'react'

import { ChevronDownIcon, SearchIcon } from 'lucide-react'
import Image from 'next/image'

import { useCountryStore } from '@/store/countryStore'
import { usePathname } from 'next/navigation'
import ContinentsFilter from './header/filters/continentsFilter'

export const Header = () => {
  const [filter, setFilter] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const countryFilter = useCountryStore((state) => state.setFilterCountry)
  const languageFilter = useCountryStore((state) => state.setFilterLanguage)
  const pathname = usePathname()
  const shouldShowHeader = !pathname.startsWith('/details')

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

  const handleFilterCountry = () => {
    if (!inputRef.current) return
    countryFilter(inputRef.current?.value)
    setFilter('')
  }

  const handleSelecteFilterCountry = (value: string) => {
    languageFilter(value)
    setFilter('')
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <>
      <header className="max-w-[80rem] flex-col laptop:w-full my-9 mx-auto h-fit flex items-center justify-center tablet:flex-col laptop:flex-row tablet:justify-start gap-4 flex-wrap laptop:px-6">
        <div className="flex desktop:justify-start items-start flex-1 shrink-0 max-w-[6.75rem]">
          <Image
            priority
            src="/img/logo.svg"
            width={108}
            height={59}
            alt="Logo"
          />
        </div>

        {shouldShowHeader ? (
          <section className="tablet:w-fit space-y-5 flex flex-col items-center tablet:m-auto  desktop:justify-center desktop:max-w-[53.75rem]">
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

            <div className="flex flex-wrap w-[280px] items-center justify-center tablet:flex-nowrap tablet:w-full tablet:justify-center gap-0 space-x-4 desktop:w-full  ">
              <ContinentsFilter
                filter={filter}
                setFilter={setFilter}
                inputRef={inputRef.current}
              />
            </div>
          </section>
        ) : (
          ''
        )}
      </header>
    </>
  )
}
