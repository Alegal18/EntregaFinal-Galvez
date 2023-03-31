import styled from 'styled-components'

export const ContenedorCard = styled.div`
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