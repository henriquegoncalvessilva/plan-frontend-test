import { useCountryStore } from '@/store/countryStore'
import { ChevronDownIcon } from 'lucide-react'

interface LanguagesFilterProps {
  setFilter: (value: string) => void
  inputRef: HTMLInputElement | null
}
export const LanguagesFilter = ({
  setFilter,
  inputRef,
}: LanguagesFilterProps) => {
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

  const handleSelecteFilterCountry = (value: string) => {
    languageFilter(value)
    setFilter('')
    if (inputRef) inputRef.value = ''
  }

  return (
    <>
      <form
        className="flex items-center justify-center relative w-fit"
        role="search"
        aria-label="Filtro de idiomas"
        onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="language" className="sr-only">
          Selecione um idioma
        </label>
        <select
          name="language"
          id="language"
          aria-label="Selecione um idioma"
          className="pr-10 font-semibold w-[272px] relative h-[3.125rem] bg-transparent border-white border-solid border-4 rounded-2xl p-2 text-black placeholder:text-black"
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
        <ChevronDownIcon
          className="absolute text-white right-2 pointer-events-none"
          aria-hidden="true"
        />
      </form>
    </>
  )
}
