import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import NewsService from './services/NewsService';
import {initialCountry, initialNewsCategory} from './common/data/InitialStates'
import ListadoNoticias from './components/ListadoNoticies';
import styles from './styles/NotFoundNews.module.css'

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

	let component = news.length !== 0 ? 
		<ListadoNoticias news={news}/> 
		: <p className={styles.paragraph}>No se encontro ninguna noticia</p>

	return (
		<Fragment>
			<Header 
				titulo="Buscador de Noticias"
			/>

			<div className="container white">
				<Formulario 
					setNewsRequest={setNewsRequest}
				/>
				
				{component}
				
			</div>
		</Fragment>
	);
}

export default App;
