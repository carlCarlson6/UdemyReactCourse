import {categoriesUrl} from '../data/ApiUrl';
import FormDataModel from './FormDataModel';

class RequestModel extends FormDataModel {

    get RequestUrl(){
        const url = `${categoriesUrl}`;
        return url;
    }
}

export default RequestModel;