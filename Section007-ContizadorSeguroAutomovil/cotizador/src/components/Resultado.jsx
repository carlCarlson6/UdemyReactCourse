import React from 'react';
import { Mensaje } from '../styles/Mensaje';
import { TextoCotizacion } from '../styles/TextoCotizacion';
import { ResultadoCotización } from '../styles/ResultadoCotizacion';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import PropTypes from 'prop-types';

const Resultado = ({quotation}) => {
    
    let renderReturn;
    if (quotation === 0 || quotation === undefined){
        renderReturn = (<Mensaje>Elige marca, año y tipo de seguro</Mensaje>);
    } else {
        renderReturn = (
            <ResultadoCotización>
                <TransitionGroup
                    component='p'
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resltado"
                        key={quotation}
                        timeout={{enter: 250, exit: 250}}
                    >
                        <TextoCotizacion>El total es: $ {quotation}</TextoCotizacion>
                    </CSSTransition>
                </TransitionGroup>
            </ResultadoCotización>
        );
    }

    return (
        renderReturn
    );
}

Resultado.propTypes = {
    quotation: PropTypes.number.isRequired
}

export default Resultado;
