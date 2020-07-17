import HttpService from './HttpService';
import { apiUrl } from '../common/data/ApiUrl';

class PhraseService {
    constructor(setPhrase){
        this.apiUrl = apiUrl;
        this.setPhrase = setPhrase;
        this.http = new HttpService();
    }

    async GetNewPhrase(){
        console.log('consultando api...');
        let newPhrases = await this.http.GetRequestAsync(this.apiUrl);
        let newPhrase = newPhrases[0];
        console.log('phrase: ', newPhrase);
        this.setPhrase(newPhrase);
    }

}

export default PhraseService;