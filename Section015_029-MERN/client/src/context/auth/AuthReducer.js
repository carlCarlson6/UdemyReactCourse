import {OK_LOGIN, KO_LOGIN, GET_USER, OK_SIGNUP, KO_SIGNUP, CLOSE_SESSION} from '../../types';

const alertReducer = (state, action) => {
    switch(action.type) {
        case OK_SIGNUP:
            localStorage.setItem('token', action.payload.token);    
            return { ...state, authenticated: true, message: null };

        case KO_SIGNUP:
            return { ...state, token: null, message: action.payload.message}


        default: return state;
    }
}

export default alertReducer;