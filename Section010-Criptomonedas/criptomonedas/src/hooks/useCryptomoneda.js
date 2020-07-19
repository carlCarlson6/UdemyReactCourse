import React, {Fragment, useState, useEffect} from 'react';
import { Label } from '../styles/components/Label';
import { Select } from '../styles/components/Select';
import CryptoService from '../services/CryptoService';

const useCriptomoneda = (label, initialState) => {

    const [state, setState] = useState(initialState);
    const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
    const cryptoService = new CryptoService();

    useEffect(() => {
        const getData = async () => {
            let responseCryptoCurrencies = await cryptoService.GetCrytoCurrencies();
            setCryptoCurrencies(responseCryptoCurrencies);
        }
        getData();
    },[]);

    const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={
                    event => setState(event.target.value)
                }
                value={state}
            >
                <option key="empty option" value=""> --- Seleccione --- </option>
                {cryptoCurrencies.map(cryptoCurrency => (
                    <option key={cryptoCurrency.id} value={cryptoCurrency.name}>{cryptoCurrency.fullName}</option>
                ))}
            </Select>
        </Fragment>
    )

    return [state, SelectCripto];
}

export default useCriptomoneda;