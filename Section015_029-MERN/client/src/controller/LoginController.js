import FormService from "../services/FormService";
import HttpService from "../services/HttpService";
import updateStateDataByEvent from "../common/utils/UpdateStateDataByEvent";


class LoginController {
    constructor(setUserLogin, setError){
        this.setUserLogin = setUserLogin;
        this.formService = new FormService(setError);
        this.http = new HttpService();
    }

    UpdateLoginData(data, event) {
        updateStateDataByEvent(data, this.setUserLogin, event);
    }

    Login(data, event){
        this.formService.Submit(data, event);
    }

    
}

export default LoginController;
