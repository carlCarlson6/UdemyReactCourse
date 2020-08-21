import React, { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import { Form, Field, InputSubmitForm, FormTitle, FormError } from '../components/styles/ui/FormStyles';
import useValidation from '../hooks/useValidation';
import { IFormController } from '../controllers/IFormController';
import createAccountInitialState from '../common/CreateAccountInitialState';
import { validateNewAccount } from '../validations/CreateAccountValidation';
import { AccountServices } from '../services/AccountServices';
import { IFormValue } from '../common/models/IFormValue';
import { IError } from '../common/models/IError';

const CreateAccount: React.FC = (): JSX.Element => {

    const formController: IFormController = useValidation(createAccountInitialState, validateNewAccount, new AccountServices().CreateAccount)
    
    const name: IFormValue = formController.values.find(formValue => formValue.name === 'name');
    const password: IFormValue = formController.values.find(formValue => formValue.name === 'password');
    const email: IFormValue = formController.values.find(formValue => formValue.name === 'email');

    const nameError: IError = formController.errors.find(error => error.name === 'name');
    const passwordError: IError = formController.errors.find(error => error.name === 'password');
    const emailError: IError = formController.errors.find(error => error.name === 'email');

    return (
        <Fragment>
            <Layout>
                <FormTitle>Crear Cuenta</FormTitle>

                <Form
                    onSubmit={formController.handleSubmit}
                >
                    <Field>
                        <label htmlFor="name">Nombre</label>
                        <input 
                            type="text"
                            id="name"
                            placeholder="Tu Nombre"
                            name="name"
                            onChange={formController.handleChange}
                            value={name.value}
                            onBlur={formController.handleBlur}
                        />
                    </Field>
                    {nameError && <FormError>{nameError.message}</FormError>}

                    <Field>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            placeholder="Tu Email"
                            name="email"
                            onChange={formController.handleChange}
                            value={email.value}
                            onBlur={formController.handleBlur}
                        />
                    </Field>
                    {emailError && <FormError>{emailError.message}</FormError>}

                    <Field>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            placeholder="Tu Contraseña"
                            name="password"
                            onChange={formController.handleChange}
                            value={password.value}
                            onBlur={formController.handleBlur}
                        />
                    </Field>
                    {passwordError && <FormError>{passwordError.message}</FormError>}

                    <InputSubmitForm 
                        type="submit"
                        value="Crear cuenta"
                    >CREAR CUENTA</ InputSubmitForm>

                </Form>

            </Layout>
        </Fragment>
    );
}


export default CreateAccount;