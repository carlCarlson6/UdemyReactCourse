import HttpService from './HttpService';
import ArtistResponse from '../common/models/ArtistResponse';

class ArtistService extends HttpService {

    constructor(setArtist) {
        super();
        this.setArtist = setArtist;
    }

    async GetArtistInfosAsync(url) {
        console.log("sending request to:", url);
        
        let error;
        let artistInfo;

        try {
            let response = await this.GetResponse(url);
            artistInfo = response.data;
            error = false;
        }
        
        catch {
            artistInfo = null;
            error = true;
        }
        
        finally{
            let artistResponse = new ArtistResponse(artistInfo, error);
            console.log('response', artistResponse);
            this.setArtist(artistResponse);
        }
        
    }

}

export default ArtistService;