import React, { createContext, useState, useEffect } from 'react';
import DrinksService from '../services/DrinksService';

export const ModelContext = createContext();

const ModelProvider = (props) => {
    const [drinkId, setDrinkId] = useState(null);
    
    return (
        <ModelContext.Provider
            value={{

            }}
        >
            {props.children}
        </ModelContext.Provider>
    );
}

export default ModelProvider;