import { useContext } from 'react'
import { dataContext } from '../Context/DataContext'
import Item from '../Item/Item'
import { ContenedorCard } from './style'




const OffRoad = () => {
    
    const {data} = useContext(dataContext)
    
    const prodOffRoad = data.filter(producto => producto.categoria === 'offRoad')
       
      return(
        <>
        <ContenedorCard>
            {prodOffRoad.map( producto =>
              <Item 
                  producto={producto}
                  key={producto.id}
              />          
              )}          
          </ContenedorCard>        
        </>
    )
  }

export default OffRoad