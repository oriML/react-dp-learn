import React, { ReactElement } from 'react'

interface IPepole{
    
        name: string,
        age: number,
        hairColor: string, 
        hobbies: string[]
    
  }

interface IRegularList{
    items: IPepole[],
    resourceName: string,
    itemComponent: any
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