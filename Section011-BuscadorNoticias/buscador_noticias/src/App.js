import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import NewsService from './services/NewsService';
import {initialCountry, initialNewsCategory} from './common/data/InitialStates'

function App() {

	const [newsRequest, setNewsRequest] = useState({newsCategory: initialNewsCategory, country: initialCountry});
	const [news, setNews] = useState([])
	const newsService = new NewsService();

	useEffect(() => {
		const getData = async () => {
			let getNewsResponse = await newsService.GetNewsAsync(newsRequest);
			setNews(getNewsResponse);
		};
		getData();
	}, [newsRequest]);

	return (
		<Fragment>
			<Header 
				titulo="Buscador de Noticias"
			/>

			<div className="container white">
				<Formulario 
					setNewsRequest={setNewsRequest}
				/>
			</div>
		</Fragment>
	);
}

export default App;
