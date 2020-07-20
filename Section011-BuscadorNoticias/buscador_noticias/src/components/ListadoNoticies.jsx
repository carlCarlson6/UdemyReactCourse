import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

const ListadoNoticias = ({news}) => (
    <div className="row">
        {news.map(_new => (
            <Noticia 
                key={_new.url}
                _new={_new}
            />
        ))}
    </div>
)

ListadoNoticias.titulo = {
    news: PropTypes.arrayOf(Object).isRequired
}
 
export default ListadoNoticias;