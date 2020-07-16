import React, { Fragment } from 'react';
import TextUtils from '../common/utils/TextUtils';
import {CampoDiv} from '../styles/CampoDiv';
import {CampoLabel} from '../styles/CampoLabel';
import {CampoSelect} from '../styles/CampoSelect';
import {CampoInputRadio} from '../styles/CampoInputRadio';
import {Boton} from '../styles/Boton';

const Formulario = () => {
    
    const marcas = ['americano', 'europeo', 'asiatico'];
    const años = [2021,2020,2019,2018,2017,2016,2015,2014,2013,2012];
    const planes = ['basico', 'completo'];

    const textUtils = new TextUtils();

    return (
        <form>
            <CampoDiv>
                <CampoLabel>Marca</CampoLabel>
                <CampoSelect>
                    <option value="">--- Selecione ---</option>
                    {marcas.map(marca=>{return(
                        <option key={marca} value={marca}>{textUtils.capitalize(marca)}</option>
                    );})}
                </CampoSelect>
            </CampoDiv>

            <CampoDiv>
                <CampoLabel>Año</CampoLabel>
                <CampoSelect>
                    <option value="">-- Seleccione --</option>
                    {años.map(año => {return(
                        <option key={año} value={año}>{año}</option>
                    );})}
                </CampoSelect>
            </CampoDiv>

            <CampoDiv>
                <CampoLabel>Plan</CampoLabel>
                {planes.map(plan=>{return(
                    <Fragment>
                        <CampoInputRadio 
                            key={plan} type="radio" name="plan" value={plan} 
                        /><a>{textUtils.capitalize(plan)}</a>
                    </Fragment>
                );})}
            </CampoDiv>

            <Boton type="button">Cotizar</Boton>
        </form>
    );
}
 
export default Formulario;
