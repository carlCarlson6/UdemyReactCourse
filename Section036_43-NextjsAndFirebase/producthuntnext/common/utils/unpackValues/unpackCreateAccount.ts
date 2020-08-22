import { IFormValue } from "../../models/entities/IFormValue"
import { IError } from "../../models/entities/IError"

export const unpackCreateAccountFormValues = (formValues: Array<IFormValue>) => {
    const name: IFormValue = formValues.find(formValue => formValue.name === 'name');
    const password: IFormValue = formValues.find(formValue => formValue.name === 'password');
    const email: IFormValue = formValues.find(formValue => formValue.name === 'email');
    
    return {name, password, email};
}

export const unpackCreateAccountFormErrors = (errors: Array<IError>) => {
    const nameError: IError = errors.find(error => error.name === 'name');
    const passwordError: IError = errors.find(error => error.name === 'password');
    const emailError: IError = errors.find(error => error.name === 'email');
    const formExecutionError: IError = errors.find(error => error.name === 'formExecutionFn');

    return {nameError, passwordError, emailError, formExecutionError}
}
