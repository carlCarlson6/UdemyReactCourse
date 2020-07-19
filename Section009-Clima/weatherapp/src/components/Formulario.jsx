import React, {useState, Fragment} from 'react';
import {countries} from '../common/data/InitialData'
import FormData from '../common/models/FormData';
import FormService from '../services/FormService';
import Error from './Error';

const Formulario = ({formData, setFormData, setSendRequest, setLoading}) => {
    
    
    const [error, setError] = useState(false);
    const formService = new FormService(setFormData, setError);

    return (
        <form
            onSubmit={(event) => {
                setLoading(true);
                let isFormSubmitted = formService.Submit(formData, event);
                if(!isFormSubmitted) setLoading(false);
				setSendRequest(isFormSubmitted);
			}}
        >
            {error ? <Error mensaje="Ambos campos son obligatorios"/> : null}
			
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={(event) => formService.UpdateData(formData, event)}
                />
                <label htmlFor="city">Ciudad:</label>
            </div>

            <div className="input-field col s12">
                <select 
                    name="country" 
                    id="country"
                    value={formData.country}
                    onChange={(event) => formService.UpdateData(formData, event)}
                >
                    <option value=""> --- Selecione un país --- </option>
                    {countries.map(country=>(
                        <option value={country.value} key={country.value}>{country.text}</option>
                    ))}
                    </select>
                <label htmlFor="pais">País:</label>
            </div>

			<Fragment>
				<div className="input-field col s12">
					<input
						type="submit"
						value="Buscar Clima"
						className="waves-effect waves-light btn-large btn-block yellow accent-4"
					/> 
				</div>
			</Fragment>

        </form>
    );
}
 
export default Formulario;