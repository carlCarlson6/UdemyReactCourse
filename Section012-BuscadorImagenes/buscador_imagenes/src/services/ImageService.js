import HttpService from './HttpService';
import {apiUrl, apiKey, imagePerPage} from '../settings';

class ImageService {
    constructor(){
        this.http = new HttpService();
    }

    async GetImagesAsync(searchRequest) {
        let url = `${apiUrl}key=${apiKey}&q=${searchRequest}&per_page=${imagePerPage}`;

        let images = (await this.http.GetResponseAsync(url)).data.hits;
        return images
    }

}

export default ImageService;
