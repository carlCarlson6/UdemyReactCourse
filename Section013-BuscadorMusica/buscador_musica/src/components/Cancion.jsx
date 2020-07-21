import React, { Fragment } from 'react';

const Cancion = ({lyricsObjct}) => {
    
    const {lyrics, error} = lyricsObjct;

    const component = error ?
        <p className="alert alert-danger text-center p-2">No se pudo encontrar la letra</p> 
    :
        (<Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">{lyrics}</p>
        </Fragment>);

    return (
        <Fragment>
            {component}
        </Fragment>
    );
}
 
export default Cancion;