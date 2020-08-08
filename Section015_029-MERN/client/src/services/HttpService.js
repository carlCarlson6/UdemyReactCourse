import axios from 'axios';

class HttpService {
    constructor() {
        this.client = axios.create(process.env.REACT_APP_BACKEND_URL);
    }

    async Get(url) {
        const response = await axios.get(url);
        return response;
    }

    async Post() {

    }

    
}

export default HttpService;