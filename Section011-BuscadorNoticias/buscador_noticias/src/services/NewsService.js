import HttpService from './HttpService';
import {apiUrl, apiKey} from '../settings';

class NewsService {
    constructor(){
        this.http = new HttpService();
    }

    async GetNewsAsync(newsRequest){
        const {newsCategory, country} = newsRequest;
        let url = `${apiUrl}country=${country}&category=${newsCategory}&apiKey=${apiKey}`;

        let response = await (await this.http.GetResponseAsync(url)).data.articles;
        
        return response;
    }
}

export default NewsService;