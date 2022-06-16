import React from 'react'

interface IPerson{
    person:{
        name: string,
        age: string,
        hairColor?: string, 
        hobbies?: string[]
    }
  }

export const LargePersonListItem = ({person}: IPerson) => {
  const { name, age, hairColor, hobbies } = person
  return (
    <>
        <h3>{name}</h3>
        <p>Age: {age} years</p>
        <p>Hair Color: {hairColor}</p>
        <h3>Hobbies:</h3>
        <ul>
            {hobbies!.map( hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
    </>
  )
}
