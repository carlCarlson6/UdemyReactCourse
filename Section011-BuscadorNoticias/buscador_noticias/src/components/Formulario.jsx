import React from 'react';
import styles from '../styles/Formulario.module.css'
import useSelect from '../hooks/useSelect';
import {countries, newsCategories} from '../common/data/InitialData';
import {initialCountry, initialNewsCategory} from '../common/data/InitialStates';
import FormService from '../services/FormService';
import PropTypes from 'prop-types';

const Formulario = ({setNewsRequest}) => {
    
    const [newsCategory, SelectNews] = useSelect(initialNewsCategory, newsCategories, 'Seleccione una categoría');
    const [country, SelectCountries] = useSelect(initialCountry, countries, 'Seleccione un país');

    const formService = new FormService(setNewsRequest);
    const formData = {newsCategory, country};

    return (
        <div className={`${styles.buscador} row`}>
            <div className ="col s12 m8 offset-m2">
                <form
                    onSubmit={(event)=>formService.Submit(formData, event)}
                >

                    <h2 className={styles.heading}>
                        Encuentra Noticias por Categoría
                    </h2>

                    <SelectNews />

                    <SelectCountries />

                    <div className="input-filed col s12">
                        <input
                            type="submit"
                            className={`${styles.btnBlock} btn-large amber darken-2`}
                            value="Buscar"
                        >
                        </input>
                    </div>
                
                </form>
            </div>
        </div>
    );
}

Formulario.propTypes = {
    setNewsRequest: PropTypes.func.isRequired
}
 
export default Formulario;