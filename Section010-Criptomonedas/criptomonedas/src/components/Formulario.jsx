import React, {useEffect} from 'react';
import { BotonSubmit } from '../styles/components/BotonSubmit';
import useMoneda from '../hooks/useMoneda';
import { MONEDAS } from '../common/data/InitialData';
import useCriptomoneda from '../hooks/useCryptomoneda';


const Formulario = () => {
    
    const [moneda, setMoneda, SelectMoneda] = useMoneda('Elige tu Moneda', '', MONEDAS);
    const [cripto, setcripto, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', '');

    return (
        <form>
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