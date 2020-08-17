import React, { Fragment } from 'react';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';
import {Provider} from 'react-redux'
import store from './Store';

const App = () => {
	return (
		<Fragment>
			<BrowserRouter>
				<Provider store={store}>
					<Header />

					<div className="container">
						<Switch>
							<Route 
								exact path="/" 
								component={Products} 
							/>
							<Route 
								exact path="/productos/nuevo"
								component={NewProduct}
							/>
							<Route 
								exact path="/productos/editar/:id"
								component={EditProduct}
							/>
						</Switch>
					</div>
				</Provider>
			</BrowserRouter>
		</Fragment>
	);
}

export default App;
