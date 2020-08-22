import { IFormValue } from "../common/models/IFormValue"
import { IError } from "../common/models/IError"

export const validateNewProduct = (formValues: Array<IFormValue>): Array<IError> =>  {
    let errors: Array<IError> = []

    const name: IFormValue = formValues.find(formValue => formValue.name === 'name');
    const company: IFormValue = formValues.find(formValue => formValue.name === 'company');
    const url: IFormValue = formValues.find(formValue => formValue.name === 'url');
    const description: IFormValue = formValues.find(formValue => formValue.name === 'description');
    const image: IFormValue = formValues.find(formValue => formValue.name === 'image');
    
    if(!name.value) {
        errors.push({name:name.name, message: 'El nombre es obligatiorio'});
    }

    if(!company.value) {
        errors.push({name:company.name, message: 'El nombre de la empresa es obligatiorio'});
    }

    if(!url.value) {
        errors.push({name:url.name, message: 'La url es obligatioria'});
    } else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(url.value)) {
        errors.push({name:url.name, message: 'La url ha de ser valida'});
    }

    if(!description.value) {
        errors.push({name:description.name, message: 'Se debe probeer una descripccion'});
    }

    //if(!image.value) {
    //    errors.push({name:image.name, message: 'El nombre es obligatiorio'});
    //}

    return errors;
}