import axios from 'axios';

class HttpService {
 
    async GetResponseAsync(url){   
        console.log('executing get request to: ', url);
        
        const response = await axios.get(url);
        console.log('response: ', response);

        return response;
    }
}

export default HttpService;