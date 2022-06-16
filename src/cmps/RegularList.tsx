import React, { ReactElement } from 'react'

interface IPerson{
        name: string,
        age: number,
        hairColor?: string, 
        hobbies?: string[]
}

interface IProduct{

    name: string,
    price: string,
    description?: string,
    rating?: number
  
}

interface IRegularList{
    items: IPerson[] | IProduct[],
    resourceName: string,
    itemComponent: (props :any) => JSX.Element
}

const RegularList = ({
    items,
    resourceName,
    itemComponent: ItemComponent
}: IRegularList) => {
  return (
    <>
    {
        items.map( (item, index) => <ItemComponent key={index} {...{[resourceName]: item}} /> )
}
    </>
  )
}

export default RegularList