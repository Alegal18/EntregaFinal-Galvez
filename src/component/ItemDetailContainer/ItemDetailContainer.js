import React from 'react'
import { useState, useEffect } from 'react';
import { ContenedorCard, Card, Span, Imagen, Parrafo, Boton } from './style';
import { useParams } from 'react-router-dom';
import { useContext } from 'react'
import { dataContext } from '../Context/DataContext'
  
const ItemDetailContainer = () => {  
  
  const [singleProducts, setSingleProducts] = useState({});
  const {data, agregarAlCarrito} = useContext(dataContext)
    
  const parametro = useParams();
  const idItem = parametro.idItem  
    
  useEffect(() => {
    const promesaProd = new Promise ((resolve, reject) => {      
      setTimeout( () => { 
        let encontrado = data.find((item) => item.id === idItem)                       
        resolve(encontrado);        
      }, 1000);
  })    
      promesaProd.then( respuesta => {respuesta.imagen = '../'+respuesta.imagen;setSingleProducts(respuesta)})
    
  }, [])   
  
    return(
      <ContenedorCard>
        <Card>
          <Imagen 
              src={singleProducts.imagen}
              alt='Imagen producto'
          />
          <Parrafo>Producto: {singleProducts.nombre}</Parrafo>
          <Parrafo>Precio:<Span>$ {singleProducts.precio}</Span></Parrafo>
          <Boton
              type='button'
              onClick={()=> agregarAlCarrito(singleProducts)}                   
          >
              Agregar al carrito
          </Boton>
      </Card>
    </ContenedorCard>
  )
}

export default ItemDetailContainer