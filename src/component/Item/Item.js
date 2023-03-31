import { Card, Span, Imagen, Parrafo, BotonLink } from "./style"


const Item = ({producto}) => {
    const {imagen, nombre, precio, id} = producto
  return (
    <Card>
        <Imagen 
            src={imagen} 
            alt='Imagen producto'
        />
        <Parrafo>Producto: {nombre}</Parrafo>
        <Parrafo>Precio:<Span>$ {precio}</Span></Parrafo>
        <BotonLink
            to={`producto/${id}`}            
        >
            Detalle del producto
        </BotonLink>
    </Card>
  )
}

export default Item