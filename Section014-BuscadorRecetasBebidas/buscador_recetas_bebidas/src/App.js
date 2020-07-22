import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriesProvider from './context/CategoriesContext';
import DrinksProvider from './context/DrinksContext';
import ListaRecetas from './components/ListaRecetas';
import ModelProvider from './context/ModelContext';

function App() {
	return (
		<CategoriesProvider>
			<DrinksProvider>
				<ModelProvider>

			<Header 
				message="Busca recetas de bebidas"
			/>

			<div className="container mt-5">
				<div className="row">
					<Formulario />
				</div>
			
				<ListaRecetas />

			</div>
			
			
				</ModelProvider>
			</DrinksProvider>
		</CategoriesProvider>
	);
}

export default App;
