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
        } catch(error) {
            this.dispatch({type: KO_SIGNUP, payload: error.response.data})
        }
    }

    LoginUser() {

    }
}

export default AuthServices;