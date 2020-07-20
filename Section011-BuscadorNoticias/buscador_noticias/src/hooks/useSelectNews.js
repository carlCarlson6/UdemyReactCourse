import React, { useState } from 'react';

const useSelectNews = (initialState, options) => {
    
    const [state, setState] = useState(initialState);

    const SelectNews = () => (
        <select
            className="browser-default"
        >
            <option value="">Seleccione</option>
        </select>
    )

    return [state, SelectNews];
}
 
export default useSelectNews;