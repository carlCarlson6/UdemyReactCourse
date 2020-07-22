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
            let drinkResponse = await drinksService.GetDrink(drinkId);
            setDrinkInfo(drinkResponse);
        }
        getDrinkInfo();
    },[drinkId])
    
    return (
        <ModelContext.Provider
            value={{
                drinkInfo,
                setDrinkId,     
                setDrinkInfo         
            }}
        >
            {props.children}
        </ModelContext.Provider>
    );
}

export default ModelProvider;