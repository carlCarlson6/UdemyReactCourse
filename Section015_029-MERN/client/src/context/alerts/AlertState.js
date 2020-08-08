import React, { useReducer } from 'react';
import alertContext from './AlertContext';
import alertReducer from './AlertReducer';
import AlertServices from '../../services/AlertServices';
import {HIDE_ALERT} from '../../types';

const AlertState = props => {   
    const initalState = {
       alert: null
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(alertReducer, initalState);

    //setTimeout(() => { dispatch({type: HIDE_ALERT}) }, 5000)

    return (
        <alertContext.Provider
            value={{
                alert: state.alert,
                alertServices: new AlertServices(dispatch)
            }}
        >
            {props.children}
        </alertContext.Provider>
    );
}

export default AlertState;