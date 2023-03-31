import React from 'react'
import Face from '../../socialMedia/face.png'
import Insta from '../../socialMedia/insta.png'
import Whatsapp from '../../socialMedia/whatsapp.png'
import { Div, Heading, P, Logos } from './style'


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