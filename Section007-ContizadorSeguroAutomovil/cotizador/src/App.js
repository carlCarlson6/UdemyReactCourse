import React, {useState} from 'react';
import Header from './components/Header';
import {Contenedor} from './styles/Contenedor';
import {ContenedorFormulario} from './styles/ContenedorFormulario';
import Formulario from './components/Formulario';

function App() {
	
	const [resumen, setResumen] = useState({})

  	return(
		<Contenedor>
			<Header 
				titulo="Cotizador de seguros"
			/>

			<ContenedorFormulario>
				<Formulario 
					setResumen={setResumen}
				/>
			</ContenedorFormulario>
		</Contenedor>
	);
}

export default App;