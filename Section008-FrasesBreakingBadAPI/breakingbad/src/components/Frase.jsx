import React from 'react';
import { ContenedorFrase } from '../styles/components/ContenedorFrase';


const Frase = ({phrase}) => {
    
    //if(Object.keys(phrase).length === 0) return null;
    
    return (
        <ContenedorFrase>
            <h1>{phrase.quote}</h1>
            <p>- {phrase.author}</p>
        </ContenedorFrase>
        
    );
}
 
export default Frase;