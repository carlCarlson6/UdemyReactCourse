import FormService from "../services/FormService";
import StateUpdater from "../common/utils/StateUpdater";

class NewAccountController {
    constructor(constructorParams){
        this.formService = new FormService(constructorParams.setError);
        this.stateUpdater = new StateUpdater(constructorParams.setNewUser);
        this.alertServices = constructorParams.alertServices;
        this.userServices = constructorParams.userServices;
        this.authServices = constructorParams.authServices;
    }

    UpdateNewAccountData(data, event) {
        this.stateUpdater.UpdateObjectStateDataByEvent(data, event);
    }

    CreateAccount(data, event){
        event.preventDefault();
        let formValidation = this.formService.Validate(data);

        if(!formValidation) {
            this.alertServices.Show('Todos los campos son obligatorios', 'alerta-error');
            return;
        };

        let passwordValidation = this.ValidatePasswords(data.password, data.confirmPassword)
        if(!passwordValidation) return;

        this.authServices.CreateUser({name: data.name, email: data.email, password: data.password});
    }

    ValidatePasswords(password, confirmPassword) {
        const validationPassword6Chars = (password.length >= 6);
        if(!validationPassword6Chars){
            this.alertServices.Show('La contraseña debe tener al menos 6 caracteres', 'alerta-error');
            return validationPassword6Chars;
        }
        
        const validationSamePassword = (password === confirmPassword);
        if(!validationSamePassword){
            this.alertServices.Show('Las contraseñas deben coincidir', 'alerta-error');
            return validationSamePassword;
        }
        
        return validationPassword6Chars * validationSamePassword;
    }

    HideError(time) {
        setTimeout(() => this.alertServices.Hide(), time)
    }

}

export default NewAccountController;
