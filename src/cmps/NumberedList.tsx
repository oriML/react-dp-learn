import React, { ReactElement } from 'react'

interface IPepole{
        name: string,
        age: number,
        hairColor: string, 
        hobbies: string[]
  }

interface IProduct{
      name: string,
      price: string,
      description?: string,
      rating?: number
  }

interface INumberedList{
    items: IPepole[] | IProduct[],
    resourceName: string,
    itemComponent: (props :any) => JSX.Element
}

export const NumberedList = ({
    items,
    resourceName,
    itemComponent: ItemComponent
}: INumberedList) => {
  return (
    <>
    {
        items.map( (item, index) =><>
         <h3>{index + 1}</h3>
         <ItemComponent key={index} {...{[resourceName]: item}} /> 
         
         </>
         )
}
    </>
  )
}

