import { IFormValue } from "../../common/models/IFormValue"
import { IError } from "../../common/models/IError"
import { unpackCreateAccountFormValues } from "../../common/utils/unpackValues/unpackCreateAccount";

export const validateNewAccount = (formValues: Array<IFormValue>): Array<IError> =>  {
    let errors: Array<IError> = []

    const {name, password, email} = unpackCreateAccountFormValues(formValues);
    
    if(!name.value) {
        errors.push({name:name.name, message: 'El nombre es obligatiorio'});
    }

    if(!email.value) {
        errors.push({name:email.name, message: 'El email es obligatiorio'});
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.value)) {
        errors.push({name:email.name, message: 'El email no es valido'});
    }

    if(!password.value) {
        errors.push({name:password.name, message: 'La contraseña es obligatiorio'});
    } else if (password.value.length < 6) {
        errors.push({name:password.name, message: 'La contraseña debe ser de al menos 6 caracteres'})
    }

    return errors;
}