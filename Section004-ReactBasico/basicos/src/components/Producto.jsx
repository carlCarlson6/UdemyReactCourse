import React from 'react';

const Producto = ({componentPlace, producto, carritoService}) => {
    return (
        <div>
            <p>{producto.name} - {producto.precio}$</p>
            {createButton(componentPlace, producto, carritoService)}
        </div>
    );
}

const createButton = (componentPlace, producto, carritoService) => {
    if(componentPlace === 'listado_productos'){
        return (<button type="button" onClick={() => carritoService.AddProduct(producto)}>Comprar</button>);
    }
    if(componentPlace === 'carrito') {
        return (<button type="button" onClick={() => carritoService.DeleteProduct(producto)}>Eliminar</button>);
    }
}

export default Producto;