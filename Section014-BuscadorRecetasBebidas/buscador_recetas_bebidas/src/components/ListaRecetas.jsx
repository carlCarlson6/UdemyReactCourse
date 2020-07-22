import React, { useContext } from 'react';
import { DrinksContext } from '../context/DrinksContext';
import Receta from './Receta';

const ListaRecetas = () => {

    const drinks = useContext(DrinksContext).response;

    return (
        <div className="row mt-5">
            {drinks.map(drink => (
                <Receta 
                    key={drink.id}
                    drink={drink} 
                />
            ))}
        </div>
    );
}
 
export default ListaRecetas;