import axios from 'axios'

async function getData() {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all', {})

    return response.data
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    throw new Error('Erro ao buscar dados')
  }
}

export default getData
