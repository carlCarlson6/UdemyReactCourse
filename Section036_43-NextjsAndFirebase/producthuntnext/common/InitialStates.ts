import { IFormValue } from "./models/IFormValue";

export const createAccountInitialState: Array<IFormValue> = [
    {name: 'name', value: ''},
    {name: 'email', value: ''},
    {name: 'password', value: ''},
]

export const loginInitialState: Array<IFormValue> = [
    {name: 'email', value: ''},
    {name: 'password', value: ''},
]

export const newProductInitialState: Array<IFormValue> = [
    {name: 'name', value: ''},
    {name: 'company', value: ''},
    {name: 'url', value: ''},
    {name: 'description', value: ''},
    {name: 'image', value: ''}
]