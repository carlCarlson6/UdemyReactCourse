import React, { useReducer } from 'react';
import authContext from './AuthContext';
import authReducer from './AuthReducer';
import AuthServices from '../../services/AuthServices';

const AuthState = props => {   
    const initalState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null,
        loading: true
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(authReducer, initalState);

    return (
        <authContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated, 
                user: state.user,
                message: state.message,
                authServices: new AuthServices(dispatch),
                loading: state.loading
            }}
        >
            {props.children}
        </authContext.Provider>
    );
}

export default AuthState;