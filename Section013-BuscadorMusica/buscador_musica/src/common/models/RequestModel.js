import {lyricsApiUrl, artistApiUrl} from '../data/ApiUrl';
import FormDataModel from './FormDataModel';

class RequestModel extends FormDataModel {

    get LyricstUrl(){
        const url = `${lyricsApiUrl}/${this.artist}/${this.title}`;
        return url;
    }

    get ArtistUrl(){
        const url = `${artistApiUrl}search.php?s=${this.artist}`;
        return url;
    }
}

export default RequestModel;