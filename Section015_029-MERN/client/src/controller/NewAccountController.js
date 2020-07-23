import FormService from "../services/FormService";
import HttpService from "../services/HttpService";
import updateStateDataByEvent from "../common/utils/UpdateStateDataByEvent";

class NewAccountController {
    constructor(setNewUser, setError){
        this.setNewUser = setNewUser;
        this.formService = new FormService(setError);
        this.http = new HttpService();
    }

    UpdateNewAccountData(data, event) {
        updateStateDataByEvent(data, this.setNewUser, event);
    }

    CreateAccount(data, event){
        let submit = this.formService.Submit(data, event);
        if(!submit) return;

        let passwordValidation = this.ValidatePasswords(data.password, data.confirmPassword)
        if(!passwordValidation) {
            this.formService.setError(!passwordValidation);
            return;
        };
    }

    ValidatePasswords(password, confirmPassword) {
        const validationSamePassword = (password === confirmPassword);
        const validationPassword6Chars = (password.length === 6);
        
        let validation = validationSamePassword * validationPassword6Chars;
        return validation
    }

}

export default NewAccountController;
