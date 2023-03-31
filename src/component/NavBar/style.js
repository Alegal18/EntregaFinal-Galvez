import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;

    @media (max-width: 768px) {
        margin-bottom: 8rem;
    }   
`

export const Lista = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #34495E;    
    padding: 1.5rem;
    margin: 0; 
    list-style: none; 
    
    @media (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 5rem;
      gap: 1rem;
    }   

`
export const Header = styled.h1`
    color: #fff;
    font-size: 3.5rem;
    margin-left:0;
    padding-left: 0;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }   
`
export const Enlace = styled(NavLink)`
    color: white;
    text-decoration: none;        
    
    @media (max-width: 768px) {
      gap: 1rem;
    }   
`
