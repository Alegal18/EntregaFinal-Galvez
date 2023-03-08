import React from 'react'
import Face from '../socialMedia/face.png'
import Insta from '../socialMedia/insta.png'
import Whatsapp from '../socialMedia/whatsapp.png'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2C3E50;
    padding: 1rem;
`
const Lista = styled.ul`
    
`
const Heading = styled.h1`
    color: #fff;
`
const P = styled.p`
    color: #fff;
`

const Logos = styled.ul`
    display: flex;
    list-style: none;
    gap: 0.8rem;
`


const Footer = () => {
  return (
    <Div>
        <div>
            <Heading>Moto Store</Heading>
            <P>Todos los derechos reservados</P>
        </div>
        <div>
            <Logos>
                <li>
                    <a href='#'><img src={Face}/></a>
                </li>
                <li>
                    <a href='#'><img src={Insta}/></a>
                </li>
                <li>
                    <a href='#'><img src={Whatsapp}/></a>
                </li>
            </Logos>
        </div>
    </Div>
  )
}

export default Footer