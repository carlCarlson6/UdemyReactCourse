import React from 'react';
import Imagen from './Imagen';
import PropTypes from 'prop-types';

const ListadoImagenes = ({images}) => {
    
    return (
        <div className="col-12 p-5 row">
            {images.map(image => (
                <Imagen 
                    key={image.id} 
                    image={image}
                />
            ))} 
        </div>
    );
}

ListadoImagenes.propTypes = {
    images: PropTypes.array
}

export default ListadoImagenes;