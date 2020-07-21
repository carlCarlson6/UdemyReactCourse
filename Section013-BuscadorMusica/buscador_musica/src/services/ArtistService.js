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

            if(response.data.artists === null) {
                throw new Error("can't find artist")
            }

            artistInfo = response.data.artists[0];
            error = false;
        }
        
        catch (exception) {
            console.log(exception);
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