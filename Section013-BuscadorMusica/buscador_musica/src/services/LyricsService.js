import HttpService from './HttpService';
import LyricsResponse from '../common/models/LyricsResponse';

class LyricsService extends HttpService {

    constructor(setLyrics) {
        super();
        this.setLyrics = setLyrics;
    }

    async GetLyricsAsync(url) {
        console.log("sending request to:", url);
        
        let error;
        let lyrics;

        try {
            let response = await this.GetResponse(url);
            lyrics = response.data.lyrics;
            error = false;
        }
        
        catch {
            lyrics = null;
            error = true;
        }
        
        finally{
            let lyricsResponse = new LyricsResponse(lyrics, error);
            console.log('response', lyricsResponse);
            this.setLyrics(lyricsResponse);
        }
        
    }

}

export default LyricsService;