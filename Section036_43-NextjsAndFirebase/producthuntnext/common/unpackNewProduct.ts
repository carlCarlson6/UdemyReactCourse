import { IFormValue } from "./models/IFormValue"
import { IError } from "./models/IError"

export const unpackNewProductFormValues = (formValues: Array<IFormValue>) => {
    const name: IFormValue = formValues.find(formValue => formValue.name === 'name');
    const company: IFormValue = formValues.find(formValue => formValue.name === 'company');
    const url: IFormValue = formValues.find(formValue => formValue.name === 'url');
    const description: IFormValue = formValues.find(formValue => formValue.name === 'description');
    const image: IFormValue = formValues.find(formValue => formValue.name === 'image');

    return {name, company, url, description, image};
}

export const unpackNewProductFormErrors = (errors: Array<IError>) => {
    const nameError: IError = errors.find(error => error.name === 'name');
    const companyError: IError = errors.find(error => error.name === 'company');
    const urlError: IError = errors.find(error => error.name === 'url');
    const descriptionError: IError = errors.find(error => error.name === 'description');
    const imageError: IError = errors.find(error => error.name === 'image');
    const formExecutionError: IError = errors.find(error => error.name === 'formExecutionFn');

    return {nameError, companyError, urlError, descriptionError, imageError, formExecutionError}
}
