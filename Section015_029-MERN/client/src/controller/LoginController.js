import FormService from "../services/FormService";
import StateUpdater from "../common/utils/StateUpdater";

class LoginController {
    constructor(setUserLogin, setError){
        this.setUserLogin = setUserLogin;
        this.formService = new FormService(setError);
        this.stateUpdater = new StateUpdater(setUserLogin);
    }

    UpdateLoginData(data, event) {
        this.stateUpdater.UpdataObjectStateDataByEvent(data, this.setUserLogin, event);
    }

    Login(data, event){
        this.formService.Submit(data, event);
    }

    
}

export default LoginController;
