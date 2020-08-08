import {OK_LOGIN, KO_LOGIN, GET_USER, OK_SIGNUP, KO_SIGNUP, CLOSE_SESSION} from '../types';
import httpClient from '../config/HttpClient';
import authToken from '../config/AuthToken'

class AuthServices {
    constructor(dispatch) {
        this.dispatch = dispatch;
        this.httpClient = httpClient;
    }

    async CreateUser(data) {
        try {
            const response = await this.httpClient.post('api/users', data);
            this.dispatch({type: OK_SIGNUP, payload: response.data});
            this.GetAuthenticatedUser();
        } catch(error) {
            const alert = {message: error.response.data.message, category:'alerta-error'}
            this.dispatch({type: KO_SIGNUP, payload: alert})
        }
    }

    async LoginUser(data) {
        try {
            const response = await this.httpClient.post('api/auth', data);
            console.log(response.data)
            this.dispatch({type: OK_LOGIN, payload: response.data});
            this.GetAuthenticatedUser();
        } catch(error) {
            const alert = {message: error.response.data.message, category:'alerta-error'}
            this.dispatch({type: KO_LOGIN, payload: alert})
        }
    }

    async GetAuthenticatedUser() {
        const token = localStorage.getItem('token');
        if(token) {
            authToken(token);
        }

        try {
            const response = await this.httpClient.get('/api/auth');
            this.dispatch({type: GET_USER, payload: response.data});
        } catch (error) {
            this.dispatch({type: KO_LOGIN, });
        }
    }


}

export default AuthServices;