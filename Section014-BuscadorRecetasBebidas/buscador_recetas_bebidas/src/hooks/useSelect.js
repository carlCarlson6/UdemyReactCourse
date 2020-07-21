import React, { useState, Fragment } from 'react';

const useSelect = (initialState, options, selectMessage) => {
    
    const [state, setState] = useState(initialState);

    const Select = () => (
        <Fragment>
            
            <select
                className="form-control"
                onChange={event => setState(event.target.value)}
                value={state}
                placeholder={selectMessage}
            >
                <option key={selectMessage} value="">{selectMessage}</option>
                {options.map(optionElement => (
                        <option key={optionElement} value={optionElement}>{optionElement}</option>
                    ))}

            </select>
        </Fragment>
    )

    return [state, Select];
}
 
export default useSelect;