import axios from 'axios'

export async function getData() {
  try {
    const response = await axios.get(
      'https://restcountries.com/v3.1/all?fields=name,flags,continents,region,translations,capital,languages',
      {},
    )
    console.log('Dados recebidos:', response.data)
    return response.data
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    throw new Error('Erro ao buscar dados')
  }
}
export async function getCountryByName(name: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/all?fields=${name},por,flags,continents,region,translations,capital,languages,name,population`,
  )

  if (!res.ok) {
    throw new Error('Erro ao buscar país')
  }

  const data = await res.json()
  return data[0]
}
