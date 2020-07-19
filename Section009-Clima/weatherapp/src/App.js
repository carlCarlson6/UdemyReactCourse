import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Clima from './components/Clima';
import Formulario from './components/Formulario';
import Spinner from './components/Spinner';
import Error from './components/Error';
import FormData from './common/models/FormData';
import WeatherService from './services/WeatherService';

function App() {
	
	const [formData, setFormData] = useState(new FormData('', ''));
	const [sendRequest, setSendRequest] = useState(false);
	const [weather, setWeather] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	
	const weatherService = new WeatherService(setWeather);

	const getWeatherData = async () => {
		setError(false);
		const weatherResponse = await weatherService.GetData(formData);
		
		setLoading(false);
		setSendRequest(false);

		if(weatherResponse.cod === "404") {
			console.log('error');
			setError(true);
		}else {
			setError(false);
		}
	};

	useEffect(() => {
		if(sendRequest) {
			console.log('ejecutando consulta');	
			getWeatherData();
		}
	}, [sendRequest])

	let componente;
	if(error) {
		componente = <Error mensaje="No hay resultados" />
	} else {
		componente = <Clima weather={weather} />
	}

	return (
		<Fragment>
			<Header 
				titulo={'Clima React App'}
			/>

			<div className="contenedor-form">
				<div className="continer">
					<div className="row">
						<div className="col m6 s12">
							<Formulario 
								formData={formData}
								setFormData={setFormData}
								setSendRequest={setSendRequest}
								setLoading={setLoading}
							/>
						</div>
						
						<div className="col m6 s12">
							<Spinner 
								loading={loading}
							/>
							{componente}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
