import React, { Fragment, useState } from 'react';
import TextUtils from '../common/utils/TextUtils';
import {CampoDiv} from '../styles/CampoDiv';
import {CampoLabel} from '../styles/CampoLabel';
import {CampoSelect} from '../styles/CampoSelect';
import {CampoInputRadio} from '../styles/CampoInputRadio';
import {Boton} from '../styles/Boton';
import FormData from '../common/models/FormData';
import FormDataService from '../services/FormDataService';


const Formulario = () => {
    
    const marcas = ['americano', 'europeo', 'asiatico'];
    const años = [2021,2020,2019,2018,2017,2016,2015,2014,2013,2012];
    const planes = ['basico', 'completo'];

    const [formData, setFormData] = useState(new FormData('','',''));
    const formDataService = new FormDataService(setFormData);
    const {marca, year, plan} = formData;

    const textUtils = new TextUtils();

    return (
        <form>
            <CampoDiv>
                <CampoLabel>Marca</CampoLabel>
                <CampoSelect
                    name="marca"
                    value={marca}
                    onChange={(event)=>formDataService.Update(formData, event)}
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
                    value={year}
                    onChange={(event)=>formDataService.Update(formData, event)}
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
                            checked={plan === planElementList}
                            onChange={(event)=>formDataService.Update(formData, event)}
                        /><a>{textUtils.capitalize(planElementList)}</a>
                    </Fragment>
                );})}
            </CampoDiv>

            <Boton type="button">Cotizar</Boton>
        </form>
    );
}
 
export default Formulario;
