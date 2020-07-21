import React, { createContext, useState, useEffect } from 'react';
import DrinksService from '../services/DrinksService';


export const CategoriesContext = createContext();

const CategoriesProvider = (props) => {
    
    const [categories, setCategories] = useState([]);

    const drinksService = new DrinksService();

    useEffect(()=>{
        const getCategories = async () => {
            let categoriesList = await drinksService.GetCategoriesList();
            setCategories(categoriesList);
        }
        getCategories()
    }, []);

    return (
        <CategoriesContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;