import HttpService from "./HttpService";
import { categoriesUrl } from "../common/data/ApiUrl";

class DrinksService extends HttpService {

    async GetCategoriesList() {
        let url = categoriesUrl; 
        
        console.log('sending request', url);
        let response = (await this.GetResponse(url)).data
        console.log('sending response', response);
    
        const drinks = response.drinks.map(drink => drink.strCategory)

        return drinks;
    }
}

export default DrinksService;