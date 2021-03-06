import { IFormValue } from "../../common/models/entities/IFormValue"
import { IError } from "../../common/models/entities/IError"
import { unpackNewProductFormValues } from "../../common/utils/unpackValues/unpackNewProduct";

export const validateNewProduct = (formValues: Array<IFormValue>): Array<IError> =>  {
    let errors: Array<IError> = []

    const {name, company, url, description} = unpackNewProductFormValues(formValues);
    
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

    return errors;
}