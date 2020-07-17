import React, { Fragment, useState } from 'react';
import TextUtils from '../common/utils/TextUtils';
import {CampoDiv} from '../styles/CampoDiv';
import {CampoLabel} from '../styles/CampoLabel';
import {CampoSelect} from '../styles/CampoSelect';
import {CampoInputRadio} from '../styles/CampoInputRadio';
import {ErrorForm} from '../styles/ErrorForm';
import {Boton} from '../styles/Boton';
import FormData from '../common/models/FormData';
import FormService from '../services/FormService';
import getInitialValues from '../common/data/FormInitialValues';
import PropTypes from 'prop-types';

const Formulario = ({setResumen, setLoading}) => {
    
    const {marcas, años, planes} = getInitialValues();

    const [formData, setFormData] = useState(new FormData('','',''));
    const [error, setError] = useState(false);

    const textUtils = new TextUtils();
    const formService = new FormService(setFormData, setError);

    return (
        <form
            onSubmit={(event)=>{
                let quotation = formService.Submit(formData, event);
                
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    setResumen({formData, quotation: quotation});
                },3000);
            }}
        >

            {error ? <ErrorForm>Todos los campos son obligatorios</ErrorForm> : null}

            <CampoDiv>
                <CampoLabel>Marca</CampoLabel>
                <CampoSelect
                    name="marca"
                    value={formData.marca}
                    onChange={(event)=>formService.Update(formData, event)}
                >
                    <option value="">--- Selecione ---</option>
                    {marcas.map(marca=>{return(
                        <option key={marca} value={marca}>{textUtils.capitalize(marca)}</option>
                    );})}
                </CampoSelect>
            </CampoDiv>

            <CampoDiv>
                <CampoLabel>Año</CampoLabel>
                <CampoSelect
                    name="year"
                    value={formData.year}
                    onChange={(event)=>formService.Update(formData, event)}
                >
                    <option value="">-- Seleccione --</option>
                    {años.map(año => {return(
                        <option key={año} value={año}>{año}</option>
                    );})}
                </CampoSelect>
            </CampoDiv>

            <CampoDiv>
                <CampoLabel>Plan</CampoLabel>
                {planes.map(planElementList=>{return(
                    <Fragment>
                        <CampoInputRadio 
                            key={planElementList} 
                            type="radio" 
                            name="plan" 
                            value={planElementList} 
                            checked={formData.plan === planElementList}
                            onChange={(event)=>formService.Update(formData, event)}
                        /><Fragment>{textUtils.capitalize(planElementList)}</Fragment>
                    </Fragment>
                );})}
            </CampoDiv>

            <Boton type="submit">Cotizar</Boton>
        </form>
    );
}

Formulario.propTypes = {
    setResumen: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired
}

export default Formulario;
