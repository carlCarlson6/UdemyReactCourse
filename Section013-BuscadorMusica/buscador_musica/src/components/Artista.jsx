import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import ArtistResponse from '../common/models/ArtistResponse'

const Artista = ({artistObject}) => {
    
    const {info, error} = artistObject;
    const {strArtistThumb, strGenre, strBiographyES} = info;

    const component = error ?
        <p className="alert alert-danger text-center p-2">No se pudo encontrar al artista</p> 
    :
        (
            <div className="card border-light">

                <div className="card-header bg-primary text-light font-weight-bold">
                    Información Artista
                </div>

                <div className="card-body">
                    <img src={strArtistThumb} alt="Logo Artista" />    
                    <p className="card-text">Género: {strGenre}</p>                         
                    <h2 className="card-text">Biografía</h2>
                    <p className="card-text">{strBiographyES}</p>
                    <p className="card-text">
                        <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-lastfm"></i>
                        </a>
                    </p>
                </div>

            </div>
        );

    return (
        <Fragment>
            {component}
        </Fragment>
    );
}

Artista.propTypes = {
    artistObject: PropTypes.objectOf(ArtistResponse).isRequired
}

export default Artista;