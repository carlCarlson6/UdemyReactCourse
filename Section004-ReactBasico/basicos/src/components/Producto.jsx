import React from 'react';

const Producto = ({producto, carrito, agregar}) => {
    const {id, name, precio} = producto;

    // agregar prodcutop al carrito
    const seleccionarProducto = () => {
        console.log(`comprando producto id: ${id}`);
    }

    return (
        <div>
            <p>{name} - {precio}$</p>
            <button type="button" onClick={seleccionarProducto}>Comprar</button>
        </div>
    );
}
 
export default Producto;