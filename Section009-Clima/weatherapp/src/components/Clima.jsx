import React from 'react';
import WeatherUtils from '../common/utils/WeatherUtils';

const Clima = ({weather}) => {
    
    const {name, main} = weather;
    
    if(!name) return null;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es</h2>
                
                <p className="temperatura">
                    {new WeatherUtils().KelvinToCelsius(main.temp)} <span> &#x2103;</span>
                </p>

                <p>Temperatura Máxima: 
                    {new WeatherUtils().KelvinToCelsius(main.temp_max)} <span> &#x2103;</span>
                </p>
                    
                <p>Temperatura Minima: 
                    {new WeatherUtils().KelvinToCelsius(main.temp_min)} <span> &#x2103;</span>
                </p>
            </div>
        </div>
    );
}
 
export default Clima;