import React from 'react'


interface IProduct{
    product:{
      name: string,
      price: string,
      description?: string,
      rating?: number
    }
  }
export const LargeProductListItem = ({ product }: IProduct) => {
    const { name, price, description, rating  } = product;

  return (
    <>
        <h3> {name} </h3>
        <p> {price} </p>
        <h3> Description: </h3>
        <p>{description}</p>
        <p> Avarge Rating: {rating} </p>
    </>
  )
}
