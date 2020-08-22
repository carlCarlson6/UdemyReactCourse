import { ChangeEvent, FormEvent } from 'react';
import { IFormValue } from '../../models/entities/IFormValue';
import { IError } from "../../models/entities/IError";

export interface IFormController {
    values: Array<IFormValue>,
    errors: Array<IError>,
    submitForm: boolean,
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void,
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    handleBlur: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}