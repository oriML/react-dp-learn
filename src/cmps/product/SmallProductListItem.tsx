import React from 'react'

interface IProduct{
  product:{
    name: string,
    price: string,
    description?: string,
    rating?: number
  }
}

export const SmallProductListItem = ({ product }: IProduct) => {

    const { name, price } = product;

  return (
    <h3>{name} - {price} </h3>
  )
}
