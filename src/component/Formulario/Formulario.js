import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Div= styled.div`
    max-width: 90%;
    width: 100%;
    height: 100%;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center ;
    
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    /* justify-content: flex-start; */
    max-width: 90%;
    height:23rem;
    width: 20rem;
    border-color: black;      
    gap: 2rem;
    margin-bottom: 15rem;
`
const DivLabel = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    
`
const DivInput = styled.input`    
    width: 80%;
    padding: 1rem;
    border-radius: 1rem;
    
`
const DivInputMensaje = styled.input`    
    width: 80%;
    height: 5rem;
    border-radius: 1rem;
    
`
const EnlacePago = styled.button`
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
const Label = styled.label`
    font-size: medium;
    font-weight: bold;

`

const Formulario = (props) => {
   
    const [userData, setUserData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        mensaje: ''
    })   
    
        
    function handleUserData(e) { 
                      
        const value = e.target.value;
        const input = e.target.name;

        const newUserData = {...userData};
        newUserData[input] = value;
        setUserData(newUserData)
    }    
        
    function clearForm(e) {
        e.preventDefault()
        setUserData({
            nombre: '',
            telefono: '',
            email: '',
            mensaje: ''
        })                          
    }

  return (
    <Div>
        <Form>
            <DivLabel>
                <Label>Nombre</Label>
                <DivInput
                    value={userData.nombre}
                    type='text'
                    id='nombre'
                    name='nombre'                    
                    placeholder='Nombre'
                    onChange={handleUserData}
                />
            </DivLabel>
            <DivLabel>
                <Label>Telefono</Label>
                <DivInput 
                    value={userData.telefono}
                    type='tel'
                    id='telefono'
                    name='telefono'                    
                    placeholder='XXX-XXXXXX'
                    onChange={handleUserData}
                />
            </DivLabel>
            <DivLabel>
                <Label>E-mail</Label>
                <DivInput
                    value={userData.email} 
                    type='email'
                    id='email'
                    name='email'                   
                    onChange={handleUserData}
                />
            </DivLabel>
            <DivLabel>
                <Label>Notas</Label>
                <DivInputMensaje
                    value={userData.mensaje} 
                    type='text'     
                    id='mensaje'
                    name='mensaje'
                    placeholder='Informacion adicional'
                    onChange={handleUserData}
                />
            </DivLabel>
             
            <EnlacePago
                disabled={!(userData.name !== '' && userData.telefono !== '' && userData.email !== '' && userData.mensaje !== '')}
                type='submit'
                onClick={(e) => {
                    e.preventDefault()
                    props.onSubmit(userData)}}
                
                >Crear Orden
            </EnlacePago>
            <Enlace                
                onClick={clearForm}

                >Limpiar Formulario
            </Enlace>
        </Form>
        
    </Div>
  )
}

export default Formulario