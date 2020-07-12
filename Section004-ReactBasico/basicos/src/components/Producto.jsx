import React from 'react';

const Producto = ({producto, carrito, agregarProducto}) => {
    const {id, name, precio} = producto;

    // agregar prodcutop al carrito
    const seleccionarProducto = () => {
        console.log(`agregando producto id: ${id}`);
        agregarProducto([...carrito, producto]);
    }

    return (
        <div>
            <p>{name} - {precio}$</p>
            <button type="button" onClick={seleccionarProducto}>Comprar</button>
        </div>
    );
}

export default Producto;