import React, { useState, Fragment } from 'react';

const useSelect = (initialState, options, selectMessage) => {
    
    const [state, setState] = useState(initialState);

    const Select = () => (
        <Fragment>
            <label> --- {selectMessage} --- </label>
            <select
                className="browser-default"
                onChange={event => setState(event.target.value)}
                value={state}
            >

                {options.map(optionElement => (
                        <option key={optionElement.value} value={optionElement.value}>{optionElement.label}</option>
                    ))}

            </select>
        </Fragment>
    )

    return [state, Select];
}
 
export default useSelect;