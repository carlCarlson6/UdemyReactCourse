import React, {useContext} from 'react';
import useSelect from '../hooks/useSelect';
import { CategoriesContext } from '../context/CategoriesContext';

const Formulario = () => {

    const {categories} = useContext(CategoriesContext);
    const [categoryState, SelectCategory] = useSelect('', categories,' -- Seleccione Categoria -- ');

    return (
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Buscar bebidas por categoria o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                
                <div className="col-md-4">
                    <input 
                        name="ingridientName"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
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