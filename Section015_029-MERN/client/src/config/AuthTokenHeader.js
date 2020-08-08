import axiosClient from './HttpClient';

const setAuthTokenHeader = token => {
    if(token) {
        axiosClient.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axiosClient.defaults.headers.common['x-auth-token'];
    }
}

export default setAuthTokenHeader;