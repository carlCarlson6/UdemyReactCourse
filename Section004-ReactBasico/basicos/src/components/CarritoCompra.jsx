import React from 'react';
import '../styles/carrito.css'

const CarritoCompra = ({carrito}) => {
    
    let precioTotal = calcularPrecioTotal(carrito);

    return (
        <div className="carrito">
            <h5>tu carrito de la compra</h5>
            <h6>precio total: {precioTotal}$</h6>         
        </div>
    );
}

const calcularPrecioTotal = (carrito) => {
    return carrito.reduce((totalActural, producto) => {return totalActural + producto.precio;}, 0);
}