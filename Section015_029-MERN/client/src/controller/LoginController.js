import FormService from "../services/FormService";
import HttpService from "../services/HttpService";


class LoginController {
    constructor(setUserLogin, setError){
        this.formService = new FormService(setUserLogin, setError);
        this.http = new HttpService();
    }

    UpdateLoginData(data, event) {
        this.formService.Update(data, event);
    }

    Login(data, event){
        this.formService.Submit(data, event);
    }

    
}

export default LoginController;
