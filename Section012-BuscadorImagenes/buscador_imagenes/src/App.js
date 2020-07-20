import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ImageService from './services/ImageService';
import ListadoImagenes from './components/ListadoImagen';
import PageService from './services/PageService';

function App() {

	const [searchRequest, setSearchRequest] = useState('');
	const [images, setImages] = useState([])
	const [actualPage, setActualPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const imageService = new ImageService(setTotalPages);
	const pageService = new PageService(setActualPage);

	useEffect(() => {
		const getImages = async () => {
			if(searchRequest === ''){return;}

			let getImagesResponse = await imageService.GetImagesAsync(searchRequest, actualPage);
			
			setImages(getImagesResponse.hits);
			setTotalPages(imageService.ComputeTotalPages(getImagesResponse.totalHits));
		
			const jumbotron = document.querySelector('.jumbotron');
			jumbotron.scrollIntoView({behavior: 'smooth'});
		}
		getImages()
	}, [searchRequest, actualPage])


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

			<div className="row justify-content-center">
				
				<ListadoImagenes 
					images={images}
				/>
			
				{(actualPage === 1) ? null : (
					<button
						type="button"
						className="bbtn btn-info mr-1"
						onClick={() => pageService.PreviousPage(actualPage)}
					>&laquo; Anterior</button>
				)}

				{(actualPage === totalPages) ? null : (
					<button
						type="button"
						className="bbtn btn-info"
						onClick={() => pageService.NextPage(actualPage, totalPages)}
					>Siguiente &raquo;</button>
				)}



			</div>

		</div>
	);
}

export default App;
