import React from 'react';
import Producto from './Producto'

const ListProducto = ({productos, carrito, agregar}) => {
    return ( productos.map(producto => (<Producto key={producto.id} producto={producto} carrito={carrito} agregar={agregar}/>) ) );
}
 
export default ListProducto;