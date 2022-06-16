import React from 'react'

interface ISmallPerson{
  person:{
      name: string,
      age: string,
  }
}


export const SmallPersonListItem = ({person}: ISmallPerson ) => {
  const { name, age } = person
  return (
    <p>Name: {name}, Age: {age} years</p>
  )
}
