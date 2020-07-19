import React, {Fragment, useState} from 'react';
import { Label } from '../styles/components/Label';
import { Select } from '../styles/components/Select';

const useCriptomoneda = (label, initialState) => {

    const [state, setState] = useState(initialState);

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
                {/*optionList.map(optionElement => (
                    <option key={optionElement.code} value={optionElement.code}>{optionElement.name}</option>
                ))*/}
            </Select>
        </Fragment>
    )

    return [state, setState, SelectCripto];
}

export default useCriptomoneda;