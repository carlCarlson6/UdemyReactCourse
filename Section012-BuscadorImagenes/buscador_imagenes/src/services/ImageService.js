import HttpService from './HttpService';
import {apiUrl, apiKey, imagePerPage} from '../settings';

class ImageService {
    constructor(setTotalPages){
        this.http = new HttpService();
        this.setTotalPages = setTotalPages;
    }

    async GetImagesAsync(searchRequest, actualPage) {
        let url = `${apiUrl}key=${apiKey}&q=${searchRequest}&per_page=${imagePerPage}&page=${actualPage}`;     
        let response = (await this.http.GetResponseAsync(url)).data;
        return response;
    }

    ComputeTotalPages(total) {
        let totalPages = Math.ceil(total / imagePerPage);
        return totalPages;
    }
}

export default ImageService;
