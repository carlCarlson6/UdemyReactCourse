import HttpService from "./HttpService";
import { apiUrl } from "../common/data/ApiUrl";
import DrinkModel from "../common/models/DrinkModel";

class DrinksService extends HttpService {

    async GetCategoriesList() {
        let url = `${apiUrl}/list.php?c=list`; 
        
        console.log('sending request', url);
        let response = (await this.GetResponse(url)).data
        console.log('sending response', response);
    
        const categories = response.drinks.map(drink => drink.strCategory);
        return categories;
    }

    async GetDrinks(request) {
        let url = request.RequestUrl;

        console.log('sending request', url);
        let response = (await this.GetResponse(url)).data
        console.log('sending response', response);
        
        let drinks = response.drinks.map(drink => new DrinkModel(drink.idDrink, drink.strDrink, drink.strDrinkThumb));
        return drinks;
    }

    async GetDrink() {

    }
}

export default DrinksService;