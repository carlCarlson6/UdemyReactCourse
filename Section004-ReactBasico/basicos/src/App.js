import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './common/models/Product';
import ListProducto from './components/ListProducto';
import CarritoCompra from './components/CarritoCompra';


function App() {
	// crear listado de productos
	const [productos, setProductos] = useState(getInitialProducts());

	// state para carrito de la compra
	const [carrito, setCarrito] = useState([]);

	// obtener fecha
	const fecha = new Date().getFullYear();

	return (
    	<Fragment>
      		<Header key="header" titulo='tienda virtual' />
			<ListProducto componentId="listado_productos" key="listado_productos" productos={productos} carrito={carrito} setCarrito={setCarrito} />
			<CarritoCompra componentId="carrito" key="carrito" carrito={carrito} setCarrito={setCarrito}/>
			<Footer key="footer" fecha={fecha} />
		</Fragment>
  	);
}

const getInitialProducts = () => {
	let initialProducts = [new Product(1, 'camisa reactjs', 50), new Product(2, 'camisa angular', 30), new Product(3, 'camisa vue', 40), new Product(4, 'camisa node', 80)];
	return initialProducts;
}

export default App;
