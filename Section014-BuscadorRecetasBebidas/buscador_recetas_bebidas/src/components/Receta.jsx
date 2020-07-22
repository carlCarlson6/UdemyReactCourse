import React, {useContext, useState} from 'react';
import {ModelContext} from '../context/ModelContext';
import Modal from '@material-ui/core/Modal';
import ModelServices from '../services/ModelServices';
import {showIngredients} from '../common/utils/ShowDrinkInfo'
import PropTypes from 'prop-types';

const Receta = ({drink}) => {
    
    const [open, setOpen] = useState(false);

    const context = useContext(ModelContext);

    const modelServices = new ModelServices(context, setOpen);
    const [modelStyle] = useState(modelServices.ModalStyle);
    const classes = modelServices.Sytles();

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
                        onClick={() => modelServices.Open(drink.id)}
                    >   Ver receta
                    </button>

                    <Modal
                        open={open}
                        onClose={() => modelServices.Close()}
                    >
                        <div
                            style={modelStyle}
                            className={classes.paper}
                        >
                            <h2>{context.drinkInfo.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones:</h3>
                            <p>{context.drinkInfo.strInstructions}</p>
                            <h3>Intredientes y cantidades</h3>
                            <ul>{showIngredients(context.drinkInfo)}</ul>
                        </div>
                    </Modal>

                </div>

            </div>
        </div>
    );
}

Receta.propTypes = {
    drink: PropTypes.object.isRequired
}
 
export default Receta;