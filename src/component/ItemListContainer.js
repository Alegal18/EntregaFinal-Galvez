import React from 'react'
import styled from 'styled-components'
import Item from './Item'
import { useState, useEffect } from 'react'
import productos from '../productos/productos'

const ContenedorCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5rem 5rem ;
    gap: 5rem;
    justify-content: space-around;

        
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      
    }  
    @media (max-width: 768px) {
      margin-top: 10rem;
    }   
` 


function getItemDB() {
    return new Promise ((resolve, reject) => {
      let error = false;
      setTimeout( () => {
        if(error) reject("Error en lectura de datos");
        resolve(productos)
      }, 1000);
  
    })   
    
  }
const ItemListContainer = () => {

    
const [listaProductos, setListaProductos] = useState([]);
  
  useEffect(() => {
    let promiseData = getItemDB();      
    promiseData.then((respuesta) => {
      setListaProductos(respuesta)      
    })       
  }, [])
    
  return (
    <>
    <ContenedorCard>
        {listaProductos.map( producto =>
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