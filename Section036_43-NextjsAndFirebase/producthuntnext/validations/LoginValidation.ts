import { IFormValue } from "../common/models/IFormValue"
import { IError } from "../common/models/IError"
import { unpackLoginFormValues } from "../common/unpackLogin";

export const validateLogin = (formValues: Array<IFormValue>): Array<IError> =>  {
    let errors: Array<IError> = []

    const {email, password} = unpackLoginFormValues(formValues);
    
    if(!email.value) {
        errors.push({name:email.name, message: 'El email es obligatiorio'});
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.value)) {
        errors.push({name:email.name, message: 'El email no es valido'});
    }

    if(!password.value) {
        errors.push({name:password.name, message: 'La contraseña es obligatiorio'});
    }
    return errors;
}