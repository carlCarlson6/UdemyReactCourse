import React from 'react';
import {Contenedor} from './styles/components/Contenedor';
import imagen from './images/cryptomonedas.png'
import { Imagen } from './styles/components/Imagen';
import { Heading } from './styles/components/Heading';
import Formulario from './components/Formulario';

function App() {
  	return (
		<Contenedor>
			<div>
				<Imagen 
					src={imagen}
					alt="imagen cripto"
				/>
			</div>

			<div>
				<Heading>Cotiza criptomonedas al instante</Heading>
				<Formulario />
			</div>
		</Contenedor>
	);
}

export default App;
