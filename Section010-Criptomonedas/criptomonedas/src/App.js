import React, { useState, useEffect } from 'react';
import {Contenedor} from './styles/components/Contenedor';
import imagen from './images/cryptomonedas.png'
import { Imagen } from './styles/components/Imagen';
import { Heading } from './styles/components/Heading';
import Formulario from './components/Formulario';

function App() {

	const [request, setRequest] = useState({});

	useEffect(() => {
		if(request === {}){ return;}
		console.log('cotizando...')
	})

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
				<Formulario 
					setRequest={setRequest}
				/>
			</div>
		</Contenedor>
	);
}

export default App;
