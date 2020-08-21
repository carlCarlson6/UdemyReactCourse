import React, { useEffect, ChangeEvent, FormEvent } from 'react';
import { IFormController } from '../controllers/IFormController';
import { IFormValue } from '../common/models/IFormValue';
import { IError } from '../common/models/IError';

const useValidation = (
    initialState: Array<IFormValue>, 
    validate: (formValues: Array<IFormValue>) => Array<IError>, 
    formExecutionFn: (formValues: Array<IFormValue>) => void): IFormController => {

    const [values, setValues] = React.useState<Array<IFormValue>>(initialState);
    const [errors, setErrors] = React.useState<Array<IError>>([]);
    const [submitForm, setSubmitForm ] = React.useState(false);

    useEffect(() => {
        if(submitForm){
            const noErrors = Object.keys(errors).length === 0;
            if(noErrors) {
                formExecutionFn(values);
            }
            setSubmitForm(false);
        }
    }, [errors])

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = event.target;
        setValues(values.map(formValue => formValue.name === name ? {name, value}: formValue ))
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitForm(true);
    }

    return { values, errors, submitForm, handleSubmit, handleChange }
}

export default useValidation;