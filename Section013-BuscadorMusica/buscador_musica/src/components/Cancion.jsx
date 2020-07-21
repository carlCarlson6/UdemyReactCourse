import React, { Fragment } from 'react';

const Cancion = ({lyricsObjct}) => {
    
    const component = lyricsObjct.error ?
        <p className="alert alert-danger text-center p-2">No se pudo encontrar la letra</p> 
    :
        (<Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">{lyricsObjct.lyrics}</p>
        </Fragment>);

    return (
        <Fragment>
            {component}
        </Fragment>
    );
}
 
export default Cancion;