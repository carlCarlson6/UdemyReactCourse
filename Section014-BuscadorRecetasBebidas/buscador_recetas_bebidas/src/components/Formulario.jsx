import React, {useContext, useState} from 'react';
import useSelect from '../hooks/useSelect';
import { CategoriesContext } from '../context/CategoriesContext';
import FormDataModel from '../common/models/FormDataModel';
import FormService from '../services/FomService';

const Formulario = () => {

    const {categories} = useContext(CategoriesContext);
    const [category, SelectCategory] = useSelect('', categories,' -- Seleccione Categoria -- ');

    const [ingridient, setIngridient] = useState('');

    const [error, setError] = useState(false);

    const [formData, setFormData] = useState(new FormDataModel(category, ingridient));

    const formService = new FormService(setFormData, setError);

    return (
        <form
            className="col-12"
            onSubmit={event => formService.Submit(formData, event)}
        >
            <fieldset className="text-center">
                <legend>Buscar bebidas por categoria o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                
                <div className="col-md-4">
                    <input 
                        name="ingridient"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                        onChange={event => formService.UpdateData(formData, event)}
                    />
                </div>

                <div className="col-md-4">
                    <SelectCategory />
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>

            </div>

        </form>
    );
}
 
export default Formulario;