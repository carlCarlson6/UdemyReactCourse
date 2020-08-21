import React, { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import { IFormController } from '../controllers/IFormController';
import useValidation from '../hooks/useValidation';
import { IFormValue } from '../common/models/IFormValue';
import { IError } from '../common/models/IError';
import { FormTitle, Form, Field, FormError, InputSubmitForm } from '../components/styles/ui/FormStyles';
import { loginInitialState } from '../common/InitialStates';
import { validateLogin } from '../validations/LoginValidation';
import { AccountServices } from '../services/AccountServices';

const Login: React.FC = (): JSX.Element => {
    const formController: IFormController = useValidation(loginInitialState, validateLogin, AccountServices.LoginUser)
    
    const password: IFormValue = formController.values.find(formValue => formValue.name === 'password');
    const email: IFormValue = formController.values.find(formValue => formValue.name === 'email');
    
    const passwordError: IError = formController.errors.find(error => error.name === 'password');
    const emailError: IError = formController.errors.find(error => error.name === 'email');
    const formExecutionError: IError = formController.errors.find(error => error.name === 'formExecutionFn');

    return (
        <Fragment>
            <Layout>
                <FormTitle>Iniciar Sesión</FormTitle>

                <Form
                    onSubmit={formController.handleSubmit}
                >

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
                        value="Iniciar sesión"
                    >Iniciar sesión</ InputSubmitForm>

                    {formExecutionError && <FormError>{formExecutionError.message}</FormError>}

                </Form>

            </Layout>
        </Fragment>
    );

}


export default Login;