import React from 'react'

import getData from '@/services/api'

import CardCountryClient from '../pagination/paginate'

const CardContainer = async () => {
  const data = await getData()
  return <CardCountryClient data={data} />
}

export default CardContainer
