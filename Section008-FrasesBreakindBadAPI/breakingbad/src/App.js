import React, {useState, useEffect} from 'react';
import {Boton} from './styles/components/Boton';
import {Contenedor} from './styles/components/Contenedor';
import PhraseService from './services/PhraseService';
import Frase from './components/Frase';


function App() {

	const [phrase, setPhrase] = useState({});
	const phraseService = new PhraseService(setPhrase);

	useEffect(() => {
		const fetchData = async () => await phraseService.GetNewPhrase();
		fetchData();
	}, [])

    return (
		<Contenedor>
			<Frase 
				phrase={phrase}
			/>
			<Boton
				onClick={async () => await phraseService.GetNewPhrase()}
			>
				Obtener Frase
			</Boton>
		</Contenedor>
		
	);
}

export default App;
