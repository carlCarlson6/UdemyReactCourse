import {apiUrl} from '../data/ApiUrl';
import FormDataModel from './FormDataModel';

class RequestModel extends FormDataModel {

    get RequestUrl(){
        const url = `${apiUrl}/filter.php?c=${this.category}&i=${this.ingridient}`;
        return url;
    }
}

export default RequestModel;