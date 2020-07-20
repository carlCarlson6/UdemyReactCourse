import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({setSearchRequest}) => { 
    
    const [search, setSearch] = useState('');
    const [error, setError] = useState(false);

    const submitForm = event => {
        event.preventDefault();

        console.log('submiting');

        if(search.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        
        setSearchRequest(search);
    }

    return (
        <form
            onSubmit={(event) => submitForm(event)}
        >
            <div className="row">
                
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ej: futbol o café"
                        onChange={event => setSearch(event.target.value)}
                        value={search}
                    />
                </div>

                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>

            </div>

            {error ? <Error message="Agregue un término a la busqueda"/> : null}

        </form>
    );
}
 
export default Formulario;