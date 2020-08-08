import {OK_LOGIN, KO_LOGIN, GET_USER, OK_SIGNUP, KO_SIGNUP, CLOSE_SESSION} from '../types';
import httpClient from '../config/HttpClient';
import setAuthTokenHeader from '../config/AuthTokenHeader'

class AuthServices {
    constructor(dispatch) {
        this.dispatch = dispatch;
        this.httpClient = httpClient;
    }

    async CreateUser(data) {
        await this.GetTokenAndAuthenticatedUser(data, 'api/users', OK_SIGNUP, KO_SIGNUP);
    }

    async LoginUser(data) {
        await this.GetTokenAndAuthenticatedUser(data, 'api/auth', OK_LOGIN, KO_LOGIN);
    }

    async GetTokenAndAuthenticatedUser(data, route, dispatchActionOK, dispatchActionKO) {
        try {
            this.GetToken(route, data, dispatchActionOK)
            this.GetAuthenticatedUser();
        } catch(error) {
            const alert = {message: error.response.data.message, category:'alerta-error'}
            this.dispatch({type: dispatchActionKO, payload: alert})
        }
    }

    async GetToken(route, data, dispatchActionOK) {
        const response = await this.httpClient.post(route, data);
        this.dispatch({type: dispatchActionOK, payload: response.data});    
    }

    async GetAuthenticatedUser() {
        const token = localStorage.getItem('token');
        if(token) setAuthTokenHeader(token)

        try {
            const response = await this.httpClient.get('/api/auth');
            this.dispatch({type: GET_USER, payload: response.data});
        } catch (error) {
            this.dispatch({type: KO_LOGIN, });
        }
    }

    LogOut() {
        this.dispatch({type: CLOSE_SESSION})
    }

}

export default AuthServices;