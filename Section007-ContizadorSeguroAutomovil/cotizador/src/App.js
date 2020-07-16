import React from 'react';
import Header from './components/Header';
import {Contenedor} from './styles/Contenedor';
import {ContenedorFormulario} from './styles/ContenedorFormulario';
import Formulario from './components/Formulario';

function App() {

  	return(
		<Contenedor>
			<Header 
				titulo="Cotizador de seguros"
			/>

			<ContenedorFormulario>
				<Formulario />
			</ContenedorFormulario>
		</Contenedor>
	);
}



export default App;