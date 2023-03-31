import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import { dataContext } from '../Context/DataContext'

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;    
               
`

const BotonMenos = styled.button`
    background-color: #F5754F;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 2rem;
    margin-top: 0.7rem;

    &:hover{
        cursor: pointer;        
    }
`
const BotonMas = styled.button`
    background-color: #47D97C;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 2rem;
    margin-top: 0.7rem;
    
    &:hover{
        cursor: pointer;
    }
`

const BotonEliminar = styled.button`
    background-color: #F5754F;
    border-radius: 10px;
    width: 6rem;
    height: 3rem;
    margin-left: 2rem;
    margin-top: 0.7rem;
    font-weight: bold;
    
    &:hover{
        cursor: pointer;
        background-color: #C7562C;
    }
`
const ValorCantidad = styled.p`
    font-weight: bold;
    margin-left: 2rem;
    margin-top: 0.7rem;
`

const CartItemCounter = ({cantidad, product}) => {
    const {cart, setCart, agregarAlCarrito} = useContext(dataContext);
    
    function restarProductos() {
        const productoRepetido = cart.find((item) => item.id === product.id);
        if(productoRepetido.cantidad !== 1){
          setCart(cart.map((item)=> item.id === product.id ? {...product, cantidad: productoRepetido.cantidad - 1} : item)); 
        }
    }
    function eliminarProducto() {
        // const productoRepetido = cart.find((item) => item.id === product.id);
        setCart(cart.filter((item) => item.id !== product.id))
    }
  return (
    <Div>
        <BotonMenos
            onClick={()=> restarProductos()}
        >-</BotonMenos>
        <ValorCantidad>{cantidad}</ValorCantidad>
        <BotonMas
            onClick={()=> agregarAlCarrito(product)}
        >+</BotonMas>
        <BotonEliminar
            onClick={() => eliminarProducto()}
        >Eliminar</BotonEliminar>
    </Div>
  )
}

export default CartItemCounter