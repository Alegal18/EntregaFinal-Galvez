import React from 'react'
import { ContenedorCard } from './style'
import Item from '../Item/Item'
import { useContext } from 'react'
import { dataContext } from '../Context/DataContext'

const ItemListContainer = () => {

  const {data} = useContext(dataContext)
    
  return (
    <>
    <ContenedorCard>
        {data.map( producto =>
          <Item 
              producto={producto}
              key={producto.id}
          />          
          )}          
      </ContenedorCard>
    
    </>
  )
}

export default ItemListContainer