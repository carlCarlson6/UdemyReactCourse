import axios from 'axios';

class HttpService {
 
    async GetResponse(url){
        const response = await axios.get(url);
        return response;
    }
}

export default HttpService;