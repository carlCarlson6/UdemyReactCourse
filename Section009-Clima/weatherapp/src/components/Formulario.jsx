import React from 'react';
import {countries} from '../common/data/InitialData'

const Formulario = () => {
    
    return (
        <form>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                >
                </input>
                <label htmlFor="city">Ciudad:</label>
            </div>

            <div className="input-field col s12">
                <select name="country" id="country">
                <option value=""> --- Selecione un país --- </option>
                {countries.map(country=>(
                    <option value={country.value} key={country.value}>{country.text}</option>
                ))}
                </select>
                <label htmlFor="pais">País:</label>
            </div>

        </form>
    );
}
 
export default Formulario;