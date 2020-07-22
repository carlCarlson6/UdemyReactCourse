import React, {useContext} from 'react';
import {ModelContext} from '../context/ModelContext';

const Receta = ({drink}) => {



    return (
        <div className="col-md-4 mb-3">
            <div className="card">

                <h2 className="card-header">{drink.name}</h2>
            
                <img 
                    className="card-img-top" 
                    src={drink.thumbnail} 
                    alt={`imagen de ${drink.name}`}    
                />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn btn-primary"
                    >Ver receta</button>
                </div>

            </div>
        </div>
    );
}
 
export default Receta;