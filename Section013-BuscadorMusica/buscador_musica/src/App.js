import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import RequestModel from './common/models/RequestModel'
import LyricsService from './services/LyricsService';
import ArtistService from './services/ArtistService';
import Cancion from './components/Cancion';
import isEmptyObject from './common/Utils/IsEmptyObject'
import Artista from './components/Artista';

function App() {
	
	const [request, setRequest] = useState({});
	const [lyricsResponse, setLyricsResponse] = useState({});
	const [artistResponse, setArtistResponse] = useState({});

	const lyricsService = new LyricsService(setLyricsResponse);
	const artistService = new ArtistService(setArtistResponse);

	useEffect(() => {
		const getLyrics = () => {
			console.log('getting lyrics');
			lyricsService.GetLyricsAsync(request.LyricstUrl);
		}
		const getArtist = () => {
			console.log('getting artist info');
			artistService.GetArtistInfosAsync(request.ArtistUrl)
		}
		const getInfo = async () => {
			if(isEmptyObject(request)){return;}
			
			await Promise.all([getLyrics(), getArtist()]);
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
						{
							!isEmptyObject(artistResponse) ?
									<Artista 
										artistObject={artistResponse}
									/>
								:
									null 
						}
					</div>
				
					<div className="col-md-6">
						{
							!isEmptyObject(lyricsResponse) ?
									<Cancion 
										lyricsObjct={lyricsResponse}
									/>
								:
									null 
						}
					</div>

				</div>
			</div>

		</Fragment>
	);
}

export default App;
