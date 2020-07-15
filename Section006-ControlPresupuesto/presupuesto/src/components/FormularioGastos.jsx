import React, {useState} from 'react';
import GastoModel from '../common/models/GastoModel';
import GastoStateHandler from '../services/GastoStateHandler';
import ErrorMessage from './ErrorMessage';
import FormularioGastoSubmitter from '../services/FormularioGastoSubmitter';

const FormularioGastos = ({gastos, gastosSetter}) => {
    
    const [gasto, setGasto] = useState(new GastoModel('', null));
    const [error, setError] = useState(false);
    const gastoStateHandler = new GastoStateHandler(setGasto);
    const formularioGastosSubmitter = new FormularioGastoSubmitter(setError, setGasto, gastos, gastosSetter, gastoStateHandler);

    return (
        <form
            onSubmit={(event)=>formularioGastosSubmitter.Submit(event, gasto)}
        >
            <h2>Agrega tus gastos</h2>

            <ErrorMessage errorState={error} message={'Todos los campos son obligatorios y la cuantia no puede ser menor igual que 0'} />

            <div className="campo">
                
                <label>Concepto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="ej. transporte"
                    name="concept"
                    value={gasto.concept}
                    onChange={(event)=>gastoStateHandler.UpdateState(event, gasto)}
                />

                <label>Cantidad</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="ej. 300"
                    name="amount"
                    value={gasto.amount}
                    onChange={(event)=>gastoStateHandler.UpdateState(event, gasto)}
                />
                
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar"
                />

            </div>
        </form>
    );
}
 
export default FormularioGastos;