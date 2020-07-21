import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import ArtistResponse from '../common/models/ArtistResponse'

const Artista = ({artistObject}) => {
    
    const {info, error} = artistObject;
    
    
    let component;

    if(error) {
        component = (<p className="alert alert-danger text-center p-2">No se pudo encontrar al artista</p> );
    } else {
        const {strArtistThumb, strGenre, strBiographyES, strFacebook, strTwitter, strLastFMChart} = info;

        component = (
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
                        <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-lastfm"></i>
                        </a>
                    </p>
                </div>

            </div>
        );
    }

    return (
        <Fragment>
            {component}
        </Fragment>
    );
}

Artista.propTypes = {
    artistObject: PropTypes.object.isRequired
}

export default Artista;