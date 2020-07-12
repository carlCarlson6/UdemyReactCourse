import React from 'react';
import Producto from './Producto'

const ListProducto = ({productos, carrito, agregarProducto}) => {
    return ( productos.map(producto => (<Producto key={producto.id} producto={producto} carrito={carrito} agregarProducto={agregarProducto}/>) ) );
}
 
export default ListProducto;