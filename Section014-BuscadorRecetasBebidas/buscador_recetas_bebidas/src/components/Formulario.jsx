import React from 'react';

const Formulario = () => {
    return (
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Buscar bebidas por categoria o Ingrediente</legend>
            </fieldset>

            <div className="row">
                <div className="col-md-4">
                    <input 
                        name="ingridientName"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                    />
                </div>
            </div>

        </form>
    );
}
 
export default Formulario;