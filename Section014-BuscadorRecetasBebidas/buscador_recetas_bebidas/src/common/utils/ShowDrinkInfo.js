import React from 'react';

export const showIngredients = info => {
    let ingredients = [];
    
    for(let i = 1; i<16; i++) {
        if(info[`strIngredient${i}`]) {
            ingredients.push(
                <li>
                    {info[`strIngredient${i}`]} - {info[`strMeasure${i}`]}
                </li>
            )
        }
    }

    return ingredients;
}