import { useContext } from 'react'
import { dataContext } from '../Context/DataContext'
import Item from '../Item/Item'
import { ContenedorCard } from './style'

const Trail = () => {
  
    const {data} = useContext(dataContext)
    
    const prodTrail = data.filter(producto => producto.categoria === 'trail')
  return (
    <>
        <ContenedorCard>
            {prodTrail.map( producto =>
              <Item 
                  producto={producto}
                  key={producto.id}
              />          
              )}          
          </ContenedorCard>
        
        </>
  )  
}

export default Trail