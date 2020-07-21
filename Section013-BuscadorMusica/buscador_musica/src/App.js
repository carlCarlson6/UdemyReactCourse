import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import RequestModel from './common/models/RequestModel'
import LyricsService from './services/LyricsService';
import ArtistService from './services/ArtistService';

function App() {
	
	const [request, setRequest] = useState({});
	const [lyricsResponse, setLyricsResponse] = useState({});
	const [artistResponse, setArtistResponse] = useState({});

	const lyricsService = new LyricsService(setLyricsResponse);
	const artistService = new ArtistService(setArtistResponse);

	useEffect(() => {
		const getLyrics = async () => {
			console.log('getting lyrics');
			await lyricsService.GetLyricsAsync(request.LyricstUrl);
		}
		const getArtist = async () => {
			console.log('getting artist info');
			await artistService.GetArtistInfosAsync(request.ArtistUrl)
		}
		const getInfo = async () => {
			if(Object.keys(request).length === 0 ){return;}
			await getLyrics();
			await getArtist();
		}
		getInfo();
	}, [request]);

	return (
		<Fragment>

			<Formulario 
				setRequest={setRequest}
			/>

			<div className="container mt-5">
				<div className="row">

					<div className="col-md-6">
						1
					</div>
				
					<div className="col-md-6">
						2
					</div>

				</div>
			</div>

		</Fragment>
	);
}

export default App;
