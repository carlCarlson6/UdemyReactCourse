import { IFormValue } from "../../models/entities/IFormValue"
import { IError } from "../../models/entities/IError"

export const unpackLoginFormValues = (formValues: Array<IFormValue>) => {
    const password: IFormValue = formValues.find(formValue => formValue.name === 'password');
    const email: IFormValue = formValues.find(formValue => formValue.name === 'email');
    
    return {email, password};
}

export const unpackLoginFormErrors = (errors: Array<IError>) => {
    const passwordError: IError = errors.find(error => error.name === 'password');
    const emailError: IError = errors.find(error => error.name === 'email');
    const formExecutionError: IError = errors.find(error => error.name === 'formExecutionFn');

    return {passwordError, emailError, formExecutionError}
}
