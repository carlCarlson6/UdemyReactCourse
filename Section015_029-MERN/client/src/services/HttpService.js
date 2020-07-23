import axios from 'axios';

class HttpService {
 
    async Get(url){
        const response = await axios.get(url);
        return response;
    }
}

export default HttpService;