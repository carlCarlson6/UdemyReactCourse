import React, { useState, useEffect } from 'react';
import {Contenedor} from './styles/components/Contenedor';
import imagen from './images/cryptomonedas.png'
import { Imagen } from './styles/components/Imagen';
import { Heading } from './styles/components/Heading';
import Formulario from './components/Formulario';
import CryptoService from './services/CryptoService';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

function App() {

	const [quotationRequest, setQuotationRequest] = useState({});
	const [quotationResult, setQuotationResult] = useState({});
	const [loading, setLoading] = useState(false);

	const cryptoService = new CryptoService();

	useEffect(() => {
		const getQuotation = async () => {
			if(Object.keys(quotationRequest).length === 0 ){ return;}
			console.log('cotizando...')
			const getCrytoCurrencyQuotationResult = await cryptoService.GetCrytoCurrencyQuotation(quotationRequest);
			
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				setQuotationResult(getCrytoCurrencyQuotationResult);
			},3000)		
		}
		getQuotation();
	}, [quotationRequest])

	const component = loading? <Spinner /> : <Cotizacion quotationResult={quotationResult} />

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
					setQuotationRequest={setQuotationRequest}
				/>
				
				{component}
				
			</div>
		</Contenedor>
	);
}

export default App;
