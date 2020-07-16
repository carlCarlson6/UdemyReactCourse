import React, {useState} from 'react';
import Header from './components/Header';
import {Contenedor} from './styles/Contenedor';
import {ContenedorFormulario} from './styles/ContenedorFormulario';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import ResumenModel from './common/models/ResumenModel';
import FormData from './common/models/FormData';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';


function App() {
	
	const [resumen, setResumen] = useState(new ResumenModel(0, new FormData('','','')));
	const [loading, setLoading] = useState(false);

  	return(
		<Contenedor>
			<Header 
				titulo="Cotizador de seguros"
			/>

			<ContenedorFormulario>
				<Formulario 
					setResumen={setResumen}
				/>

				<Spinner/>

				<Resumen 
					formData={resumen.formData}
				/>
				<Resultado
					quotation={resumen.quotation}
				/>
			</ContenedorFormulario>
		</Contenedor>
	);
}

export default App;