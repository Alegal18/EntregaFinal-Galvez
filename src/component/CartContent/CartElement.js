import { useContext } from 'react'
import { dataContext } from '../Context/DataContext';
import styled from 'styled-components';
import CartItemCounter from './CartItemCounter';

const Div = styled.div`
    display: flex;    
    align-items: center;
    margin-top: 2rem;
    padding: 2rem;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      
    }  
`

const Span = styled.span`
    font-size: 1.5rem;
    font-weight: 700;
    
`    

const Imagen = styled.img`
  object-fit: cover;
  max-width: 100%;  
  width: 300px;
  height: 150px;
  margin: 0 2rem;
  display: block;
  border-radius: 1rem ;
  
`

const Parrafo = styled.p`
    margin-top: 10px;
    margin-left: 5rem;
    font-size: 1.5rem ;
    gap: 2rem;

    @media (max-width: 768px) {
      margin: 0 auto;
      font-size: 1rem;      
    }  
     
`

const CartElement = () => {

    const { cart } = useContext(dataContext);

  return cart.map((product) => {
    return (
        <Div key={product.id}>
            
            <Imagen src= {product.imagen} alt='producto-carrito'/>           
            <Parrafo>Producto: {product.nombre}</Parrafo>
            <Parrafo>Precio:<Span>$ {product.precio}</Span></Parrafo>
            <CartItemCounter product= {product} cantidad= {product.cantidad}/>
        </Div>
    )
  })
}

export default CartElement