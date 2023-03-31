import styled from 'styled-components'


export const ContenedorCard = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 60%;
    align-items: center;
    margin: 0 auto ;
    padding: 5rem;
    gap: 5rem;
            
    @media (max-width: 768px) {
      max-width: 80%;
    }    

`

export const Card = styled.div`    
    background-color: #E5E7E9;
    border-radius: 5px;
    max-width: 100%;
    width: 40rem;
    height: 20rem;
    margin: 0 auto;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.5);
    
    @media (min-width: 768px) {         
        max-width: 90%;
        width: 90%;
        
    }   

`
export const Span = styled.span`
    font-weight: 700;
    
`
export const Imagen = styled.img`
  object-fit: cover;
  max-width: 100%;  
  width: 90%;
  height: 50%;
  margin: 15px auto 0 auto;
  display: block;
  border-radius: 0.5rem;
  
`;

export const Parrafo = styled.p`
    margin-top: 10px;
    margin-left: 2rem;

        
`
export const Boton = styled.button`
    display: block;
    width: 90%;
    margin: 0 auto; 
    margin-top: 30px;
    background-color: #2C3E50;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    outline: none;
    border-style: none;
    padding: 10px 15px ;
    border-radius: 2px;

    &:hover{
        cursor: pointer;
        background-color: #566573;
    }

    @media (max-width: 996px) {        
       
        width: 100%;
        padding: 15px;
        
    }
    
`
