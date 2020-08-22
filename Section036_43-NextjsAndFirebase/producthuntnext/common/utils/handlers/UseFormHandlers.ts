import { ChangeEvent, Dispatch, SetStateAction, FormEvent } from "react";
import { IFormValue } from "../../models/entities/IFormValue";
import { IError } from "../../models/entities/IError";

export const getHandleSubmit = (values: Array<IFormValue>, validate: (formValues: Array<IFormValue>) => Array<IError>, setErrors: Dispatch<SetStateAction<Array<IError>>>, setSubmitForm: Dispatch<SetStateAction<boolean>>): ((event: FormEvent<HTMLFormElement>) => void) => {
    return (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitForm(true);
    }
}

export const getHandleChange = (values: Array<IFormValue>, setValues: Dispatch<SetStateAction<Array<IFormValue>>>): ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) => {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const {name, value} = event.target;
        setValues(values.map(formValue => formValue.name === name ? {name, value}: formValue ))
    }
}

export const getHandleBlur = (values: Array<IFormValue>, validate: (formValues: Array<IFormValue>) => Array<IError>, setErrors: Dispatch<SetStateAction<Array<IError>>>): ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) => {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
    }
}