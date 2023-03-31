import CartWidget from "../CartWidget/CartWidget";
import { Container, Lista, Header, Enlace } from "./style";
const NavBar = () => {

    return(
        <Container>

            <nav>
                
                <Lista>

                    <Header>Moto Store</Header>
                    <Enlace to="/">Inicio</Enlace>
                    <Enlace to="/trail">Trail</Enlace>
                    <Enlace to="/offRoad">Off Road</Enlace>
                    <Enlace to="/street">Street</Enlace>
                    <CartWidget />

                </Lista>                
            </nav>
           
        </Container>

    );
}

export default NavBar