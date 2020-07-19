import HttpService from "./HttpService";
import {apiUrl, apikey} from '../settings'

class WeatherService {
    constructor(setWeather) {
        this.http = new HttpService();
        this.setWeather = setWeather;
    }

    async GetData(formData) {
        let url = `${apiUrl}${formData.city},${formData.country}&appid=${apikey}`;
        let weatherResponse =  await this.http.GetAsync(url);
        
        console.log('response', weatherResponse);
        this.setWeather(weatherResponse);
    
        return weatherResponse;
    }
}

export default WeatherService;