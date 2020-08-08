import FormService from "../services/FormService";
import StateUpdater from "../common/utils/StateUpdater";

class NewAccountController {
    constructor(constructorParams){
        this.formService = new FormService(constructorParams.setError);
        this.stateUpdater = new StateUpdater(constructorParams.setNewUser);
        this.alertServices = constructorParams.alertServices;
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
        if(!passwordValidation) {
            this.formService.setError(!passwordValidation);
            return;
        }
    }

    ValidatePasswords(password, confirmPassword) {
        const validationSamePassword = (password === confirmPassword);
        const validationPassword6Chars = (password.length === 6);
        
        let validation = validationSamePassword * validationPassword6Chars;
        return validation
    }

    HideError(time) {
        setTimeout(() => this.alertServices.Hide(), 5000)
    }

}

export default NewAccountController;
