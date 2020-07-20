import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ImageService from './services/ImageService';

function App() {

	const [searchRequest, setSearchRequest] = useState('');
	const [images, setImages] = useState([])
	
	const imageService = new ImageService();

	useEffect(() => {
		if(searchRequest === '') return;

		const getImages = async () => {
			let getImagesResponse = await imageService.GetImagesAsync(searchRequest);
			setImages(getImagesResponse);
		}

		getImages()
	}, [searchRequest])


	return (
		<div className="container">
			<div className="jumbotron">
				<p className="lead text-center">
					Buscador de Imágenes
				</p>

				<Formulario
					setSearchRequest={setSearchRequest}
				/>
			
			</div>
		</div>
	);
}

export default App;
