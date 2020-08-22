import { IFormValue } from "../../common/models/entities/IFormValue"
import { IError } from "../../common/models/entities/IError"
import { unpackCreateAccountFormValues } from "../../common/utils/unpackValues/unpackCreateAccount";

export const validateComment = (formValues: Array<IFormValue>): Array<IError> =>  {
    let errors: Array<IError> = []

    const comment: IFormValue = formValues.find(formValue => formValue.name === 'comment');
    
    if(!comment.value) {
        errors.push({name:comment.name, message: 'Es necesario agregar texto al comentario'});
    }

    return errors;
}