import React, {Fragment, useState} from 'react';
import { Label } from '../styles/components/Label';
import { Select } from '../styles/components/Select';

const useMoneda = (label, initialState, optionList) => {

    const [state, setState] = useState(initialState);

    const SelectMoneda = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={
                    event => setState(event.target.value)
                }
                value={state}
            >
                <option key="empty option" value=""> --- Seleccione --- </option>
                {optionList.map(optionElement => (
                    <option key={optionElement.code} value={optionElement.code}>{optionElement.name}</option>
                ))}
            </Select>
        </Fragment>
    )

    return [state, setState, SelectMoneda];
}

export default useMoneda;