import React, { createContext, useState, useEffect } from 'react';
import DrinksService from '../services/DrinksService';

export const ModelContext = createContext();

const ModelProvider = (props) => {
    const [drinkId, setDrinkId] = useState(null);
    const [drinkInfo, setDrinkInfo] = useState({})

    const drinksService = new DrinksService();

    useEffect(()=>{
        const getDrinkInfo = async () => {
            if(!drinkId) return;
            let drinkInfo = await drinksService.GetDrink(drinkId);
        }
        getDrinkInfo();
    },[drinkId])
    
    return (
        <ModelContext.Provider
            value={{
                setDrinkId
            }}
        >
            {props.children}
        </ModelContext.Provider>
    );
}

export default ModelProvider;