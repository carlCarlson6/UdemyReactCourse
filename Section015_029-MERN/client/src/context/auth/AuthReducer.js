import {OK_LOGIN, KO_LOGIN, GET_USER, OK_SIGNUP, KO_SIGNUP, CLOSE_SESSION} from '../../types';

const authReducer = (state, action) => {
    switch(action.type) {
        case OK_SIGNUP:
            localStorage.setItem('token', action.payload.token);    
            return { ...state, authenticated: true, message: null };

        case KO_LOGIN:
        case KO_SIGNUP:
            localStorage.removeItem('token');
            return { ...state, token: null, message: action.payload}


        default: return state;
    }
}

export default authReducer;