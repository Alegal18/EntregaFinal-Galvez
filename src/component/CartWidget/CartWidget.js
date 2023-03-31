import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
import { FaCartArrowDown } from "react-icons/fa";
import { IconContext } from "react-icons";
import { LogoCart, Span, Div } from './style';

const CartWidget = () => {
    const { cart } = useContext(dataContext);
    let cantidad = cart.reduce((acc, el) => acc + el.cantidad, 0);    
  return (
    <IconContext.Provider value = {{style: {fontSize: "2em", color:"#fff"}}}>
        <Div>
            <LogoCart to="/cartItems">
                <FaCartArrowDown />                            
            </LogoCart>
            <Span>{cantidad}</Span>
        </Div>
    </IconContext.Provider>
  )
}

export default CartWidget