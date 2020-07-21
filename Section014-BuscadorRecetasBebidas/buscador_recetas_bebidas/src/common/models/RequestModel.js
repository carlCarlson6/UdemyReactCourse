import {apiUrl} from '../data/ApiUrl';
import FormDataModel from './FormDataModel';

class RequestModel extends FormDataModel {

    get RequestUrl(){
        const url = `${apiUrl}`;
        return url;
    }
}

export default RequestModel;