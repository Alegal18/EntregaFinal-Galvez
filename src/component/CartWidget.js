import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from '@emotion/styled';

const LogoCart = styled.div`
    display: flex;
    height: 30px;
    width: 30px;
    
`
const Span = styled.span`
    font-size: large;
`
const Div = styled.div`
    display: flex;
    align-items: center;
`

const CartWidget = () => {
  return (
    <IconContext.Provider value = {{style: {fontSize: "2em"}}}>
        <Div>
            <LogoCart>
                <FaCartArrowDown />                            
            </LogoCart>
            <Span>0</Span>
        </Div>
    </IconContext.Provider>
  )
}

export default CartWidget