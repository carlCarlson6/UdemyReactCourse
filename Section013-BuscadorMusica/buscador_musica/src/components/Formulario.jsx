import React, { useState } from 'react';
import FormDataModel from '../common/models/FormDataModel';
import FormService from '../services/FormService';

const Formulario = ({setRequest}) => {

    const [formData, setFormData] = useState(new FormDataModel('', ''));
    const [error, setError] = useState(false);

    const formService = new FormService(setFormData, setRequest, setError);

    return (
        <div className="bg-info">

            { error ? 
                <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> 
                : null}
            
            <div className="container">
                <div className="row">
                    <form 
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={(event) => formService.Submit(formData, event)}
                    >
                        <fieldset>
                            <legend className="text-center"
                            >Buscador Letras Canciones</legend>

                            <div className="row">

                                <div className="col-md-6">
                                    <div>
                                        <label>Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Nombre Artista"
                                            onChange={(event) => formService.UpdateData(formData, event)}
                                            value={formData.artist}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div>
                                        <label>Canción</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="title"
                                            placeholder="Nombre Canción"
                                            onChange={(event) => formService.UpdateData(formData, event)}
                                            value={formData.title}
                                        />
                                    </div>
                                </div>


                            </div>

                            <button
                               type="submit"
                               className="btn btn-primary float-right" 
                            >Buscar</button>

                        </fieldset>
                    </form>
                
                </div>
            </div>
        </div>
        
    );
}
 
export default Formulario;