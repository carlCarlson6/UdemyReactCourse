import {OK_LOGIN, KO_LOGIN, GET_USER, OK_SIGNUP, KO_SIGNUP, CLOSE_SESSION} from '../../types';

const authReducer = (state, action) => {
    switch(action.type) {
        case OK_LOGIN:
        case OK_SIGNUP:
            localStorage.setItem('token', action.payload.token);    
            return { ...state, authenticated: true, message: null, loading: false };
        
        case GET_USER:
            return { ...state, authenticated: true, user: action.payload, loading: false }        
        
        case CLOSE_SESSION:
        case KO_LOGIN:
        case KO_SIGNUP:
            localStorage.removeItem('token');
            return { ...state, token: null, message: action.payload, authenticated: false, user: null, loading: false }


        default: return state;
    }
}

export default authReducer;