import { IFormValue } from "../../models/entities/IFormValue"
import { IError } from "../../models/entities/IError"

export const unpackNewProductFormValues = (formValues: Array<IFormValue>) => {
    const name: IFormValue = formValues.find(formValue => formValue.name === 'name');
    const company: IFormValue = formValues.find(formValue => formValue.name === 'company');
    const url: IFormValue = formValues.find(formValue => formValue.name === 'url');
    const description: IFormValue = formValues.find(formValue => formValue.name === 'description');

    return {name, company, url, description};
}

export const unpackNewProductFormErrors = (errors: Array<IError>) => {
    const nameError: IError = errors.find(error => error.name === 'name');
    const companyError: IError = errors.find(error => error.name === 'company');
    const urlError: IError = errors.find(error => error.name === 'url');
    const descriptionError: IError = errors.find(error => error.name === 'description');
    const formExecutionError: IError = errors.find(error => error.name === 'formExecutionFn');

    return {nameError, companyError, urlError, descriptionError, formExecutionError}
}
