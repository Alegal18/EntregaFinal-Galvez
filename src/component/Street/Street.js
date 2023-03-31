import { useContext } from 'react'
import { dataContext } from '../Context/DataContext'
import Item from '../Item/Item'
import { ContenedorCard } from './style'



const Street = () => {
    const {data} = useContext(dataContext)
    
    const prodStreet = data.filter(producto => producto.categoria === 'street')
  return (
    <>
        <ContenedorCard>
            {prodStreet.map( producto =>
              <Item 
                  producto={producto}
                  key={producto.id}
              />          
              )}          
          </ContenedorCard>
        
        </>
  )
}

export default Street