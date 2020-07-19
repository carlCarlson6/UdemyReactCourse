import React from 'react';
import { ResultadoDiv } from '../styles/components/ResultadoDiv';
import { Precio } from '../styles/components/Precio';
import { Info } from '../styles/components/Info';

const Cotizacion = ({quotationResult}) => {
    
    if(Object.keys(quotationResult).length === 0) {return null;}
    
    return (
        <ResultadoDiv>
            <Precio>El precio es: <span>{quotationResult.PRICE}</span></Precio>
            <Info>Precio más alto del día: <span>{quotationResult.HIGHDAY}</span></Info>
            <Info>Precio más alto del día: <span>{quotationResult.LOWDAY}</span></Info>
            <Info>Variación últimas 24 horas: <span>{quotationResult.CHANGEPCT24HOUR}</span></Info>
            <Info>Última Actualización: <span>{quotationResult.LASTUPDATE}</span></Info>
        </ResultadoDiv>
    );
}
 
export default Cotizacion;