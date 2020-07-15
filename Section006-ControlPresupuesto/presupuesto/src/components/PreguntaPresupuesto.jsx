import React, {Fragment, useState} from 'react';
import PreguntaPresupuestoStateHandler from '../services/PreguntaPresupuestoStateHandler';
import PresupuestoSubmitter from '../services/PresupuestoSubmitter';
import PresupuestoModel from '../common/models/PresupuestoModel';
import ErrorMessage from './ErrorMessage';

const PreguntaPresupuesto = ({presupuestoSetter, setShowPregunta}) => {
    
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false);

    const preguntaPresupuestoStateHandler = new PreguntaPresupuestoStateHandler(setAmount);
    const presupuestoSubmitter = new PresupuestoSubmitter(setError, presupuestoSetter, setShowPregunta);

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            <ErrorMessage errorState={error} message={'El presupuesto es incorrecto'} />

            <form
                onSubmit={(event) => presupuestoSubmitter.Submit(event, new PresupuestoModel(amount, amount))}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    name="amount"
                    onChange={(event)=>preguntaPresupuestoStateHandler.UpdateAmount(event)}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}


 
export default PreguntaPresupuesto;