import React from 'react'


interface IPerson{
  person:{
      name: string,
      age: string,
      hairColor?: string, 
      hobbies?: string[]
  }
}


export const SmallPersonListItem = ({person}: IPerson ) => {
  const { name, age } = person
  return (
    <p>Name: {name}, Age: {age} years</p>
  )
}
