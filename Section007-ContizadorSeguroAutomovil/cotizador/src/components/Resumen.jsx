import React from 'react';
import { ContenedorResumen } from '../styles/ContenedorResumen';
import TextUtils from '../common/utils/TextUtils';
import PropTypes from 'prop-types';

const Resumen = ({formData}) => {

    const {marca, year, plan} = formData;
    if (marca === '' || year === '' || plan === '') return null;

    const textUtils = new TextUtils();

    return (
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {textUtils.capitalize(marca)}</li>
                <li>Plan: {textUtils.capitalize(plan)}</li>
                <li>Año del auto: {year}</li>
            </ul>
        </ContenedorResumen>    
    );
}

Resumen.propTypes = {
    formData: PropTypes.object.isRequired
}

export default Resumen;
