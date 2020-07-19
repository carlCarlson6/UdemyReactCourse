import React, {useState} from 'react';
import { BotonSubmit } from '../styles/components/BotonSubmit';
import useMoneda from '../hooks/useMoneda';
import { MONEDAS } from '../common/data/InitialData';
import useCriptomoneda from '../hooks/useCryptomoneda';
import FormService from '../services/FormService';
import FormData from '../common/models/FormData';
import Error from './Error';


const Formulario = ({setQuotationRequest}) => {
    
    const [moneda, SelectMoneda] = useMoneda('Elige tu Moneda', '', MONEDAS);
    const [crypto, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', '');
    const [error, setError] = useState(false);
    
    const formService = new FormService(setQuotationRequest, setError);
    let formData = new FormData(moneda, crypto);

    return (
        <form
            onSubmit={event => formService.Submit(formData, event)}
        >
            {error ? <Error message="Todos los campos son obligatorios"/> : null}

            <SelectMoneda />

            <SelectCripto />
            
            <BotonSubmit 
                type="submit"
                value="Calcular"
            />
        </form>
    );
}
 
export default Formulario;