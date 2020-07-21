import {lyricsApiUrl, artistApiUrl} from '../data/ApiUrl';
import FormDataModel from './FormDataModel';

class RequestModel extends FormDataModel {
    constructor(artist, title){
        super(artist, title);
    }

    get LyricstUrl(){
        const url = `${lyricsApiUrl}/${this.artist}/${this.title}`;
        return url;
    }

    get ArtistUrl(){
        const url = `${artistApiUrl}/${this.artist}`;
        return url;
    }
}

export default RequestModel;