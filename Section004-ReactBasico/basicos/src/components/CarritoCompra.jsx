import React from 'react';
import '../styles/carrito.css';
import PriceCalculator from '../common/utils/PriceCalculator';
import Producto from './Producto';
import CarritoService from '../services/CarritoService';

const CarritoCompra = ({componentId, carrito, setCarrito}) => {
    const carritoService = new CarritoService(carrito, setCarrito);
    let precioTotal = new PriceCalculator().calcTotalPrice(carrito);
    let listaproductosEnCarrito = getListaProductosEnCarrito(componentId, carrito, carritoService);

    return (
        <div className="carrito">
            <h5>tu carrito de la compra</h5>
            <h6>precio total: {precioTotal}$</h6>
            {listaproductosEnCarrito}            
        </div>
    );
}

const getListaProductosEnCarrito = (componentId, carrito, carritoService) => {
    let listadoProductos;
    if(carrito.length === 0){
        listadoProductos = (<p>el carrito esta vacio</p>);
    } 
    else {
        listadoProductos = (<ul>{carrito.map(producto =><li>
            <Producto 
                key={producto.id} 
                producto={producto}
                componentPlace={componentId}
                carritoService={carritoService}
            />
        </li>)}</ul>);
    }
    
    return listadoProductos;
}

export default CarritoCompra;