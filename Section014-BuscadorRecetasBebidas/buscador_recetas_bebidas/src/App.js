import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriesProvider from './context/CategoriesContext';

function App() {
	return (
		<CategoriesProvider>

			<Header />

			<div className="container mt-5">
				<div className="row">
					<Formulario />
				</div>
			</div>
		
		</CategoriesProvider>
	);
}

export default App;
