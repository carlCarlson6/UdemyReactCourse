import FormService from "../services/FormService";
import StateUpdater from "../common/utils/StateUpdater";

class LoginController {
    constructor(constructorParams){
        this.formService = new FormService(constructorParams.setError);
        this.stateUpdater = new StateUpdater(constructorParams.setUserLogin);
        this.alertServices = constructorParams.alertServices;
        this.userServices = constructorParams.userServices;
        this.authServices = constructorParams.authServices;
    }

    UpdateLoginData(data, event) {
        this.stateUpdater.UpdateObjectStateDataByEvent(data, event);
    }

    Login(data, event){
        event.preventDefault();
        let formValidation = this.formService.Validate(data);

        if(!formValidation) {
            this.alertServices.Show('Todos los campos son obligatorios', 'alerta-error');
            return;
        };

        this.authServices.LoginUser({email: data.email, password: data.password})
    }

    ShowAlert(message) {
        this.alertServices.Show(message.message, message.category);
    }
}

export default LoginController;
