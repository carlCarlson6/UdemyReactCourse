import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './models/Product';
import ListProducto from './components/ListProducto';


function App() {
	// crear listado de productos
	const initialProducts = [new Product(1, 'camisa reactjs', 50), new Product(2, 'camisa angular', 30), new Product(3, 'camisa vue', 40), new Product(4, 'camisa node', 80)];
	const [productos, setProductos] = useState(initialProducts);

	// state para carrito de la compra
	const [carrito, agregarProducto] = useState([]);

	// obtener fecha
	const fecha = new Date().getFullYear();

	return (
    	<Fragment>
      		<Header key="header" titulo='tienda virtual'/>
			<h4>listado de productos</h4>
			<ListProducto key="listado productos" productos={productos} carrito={carrito} agregar={agregarProducto}/>
      		<Footer key="footer" fecha={fecha}/>
    	</Fragment>
  	);
}

export default App;
