import React, { createContext, useState, useEffect } from 'react';
import DrinksService from '../services/DrinksService';
import isEmptyObject from '../common/utils/IsEmptyObject';

export const DrinksContext = createContext();

const DrinksProvider = (props) => {
    
    const [request, setRequest] = useState({});
    const [response, setResponse] = useState([]);

    const drinksService = new DrinksService();

    useEffect(() => {
        const seachDrinks = async () => {
            if(isEmptyObject(request)) {return;}
            let drinks = await drinksService.GetDrinks(request);
            setResponse(drinks);
        }
        seachDrinks();
    }, [request]);

    return (
        <DrinksContext.Provider
            value={{
                response,
                setRequest
            }}
        >
            {props.children}
        </DrinksContext.Provider>
    )
}

export default DrinksProvider;