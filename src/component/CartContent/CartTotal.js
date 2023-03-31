import { useContext } from 'react'
import { dataContext, createOrder } from '../Context/DataContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import Formulario from '../Formulario/Formulario';

const Div = styled.div`
    display: block;
    color: #34495E;
    text-align: center;
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }   
    
`
const EnlacePago = styled(Link)`
    font-size: 1.5rem;
    background-color: #47D97C;
    border-radius: 1rem;
    margin: 1rem;
    padding: 0.5rem 1rem;
    color: #fff;
    font-weight: bold;

    &:hover {
        background-color: #379A5B;
    }

`
const Enlace = styled(Link)`
    font-size: 1.5rem;
    background-color: #F5754F;
    border-radius: 1rem;
    margin: 1rem;
    padding: 0.5rem 1rem;
    color: #fff;
    font-weight: bold;

    &:hover {
        background-color: #DA5D2F;
    }
`

const CartTotal = () => {

    const { cart, setCart } = useContext(dataContext);

    const total = cart.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);

      function handleCheckOut(userData) {
        const orderData = {
            buyer: userData,
            items: cart,
            total: total,
            timestamp: new Date()
        }
        createOrder(orderData)

        setTimeout(()=>{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Compra realizada con Exito',
                showConfirmButton: false,
                timer: 2500
              })
            setCart([])
        }, 500)
    }
  return (
    <>
    {total > 0? (
        <Div>                      
            
            <h3>Total a Pagar:<span>$ {total}</span></h3>  
            <Formulario onSubmit={handleCheckOut} />          
            {/* <EnlacePago
                // onClick={()=> handleCheckOut()}                
                // to='/'
            >  Crear Orden
            </EnlacePago>              */}
                           
            {/* <Enlace
                to='/'
                onClick={() => setCart([])}
            >  Vaciar Carrito
            </Enlace>        */}
                      
        </Div>
    ) : (
        <Div>
            <h2> Tu Carrito esta vacío</h2>
        </Div>
        )}  
    </>
  )
}

export default CartTotal