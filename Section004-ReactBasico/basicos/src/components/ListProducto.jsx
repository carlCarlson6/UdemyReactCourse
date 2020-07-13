import React from 'react';
import Producto from './Producto';
import CarritoService from '../services/CarritoService'

const ListProducto = ({componentId, productos, carrito, setCarrito}) => {
    const carritoService = new CarritoService(carrito, setCarrito);

    return (
        <div>
            <h4>listado de productos</h4>
            {productos.map(producto => (
                <Producto 
                    key={producto.id}
                    componentPlace={componentId} 
                    producto={producto} 
                    carritoService={carritoService}
                />
            ))}
        </div>
    );
}
 
export default ListProducto;