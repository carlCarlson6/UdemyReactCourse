import {OK_LOGIN, KO_LOGIN, GET_USER, OK_SIGNUP, KO_SIGNUP, CLOSE_SESSION} from '../types';
import axios from 'axios';

class AuthServices {
    constructor(dispatch) {
        this.dispatch = dispatch;
        this.httpClient = axios.create({baseURL: process.env.REACT_APP_BACKEND_URL});
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

    LoginUser() {

    }

    async GetAuthenticatedUser() {
        const token = localStorage.getItem('token');
        if(token){

        }

        try {
            const response = await this.httpClient.get('/api/auth');
            console.log(response.data);
        } catch (error) {
            this.dispatch({type: KO_LOGIN, });
        }
    }


}

export default AuthServices;