import React, { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import { IFormController } from '../controllers/IFormController';
import useValidation from '../hooks/useValidation';
import { FormTitle, Form, Field, FormError, InputSubmitForm } from '../components/styles/ui/FormStyles';
import { loginInitialState } from '../common/InitialStates';
import { validateLogin } from '../validations/LoginValidation';
import { AccountServices } from '../services/AccountServices';
import { unpackLoginFormValues, unpackLoginFormErrors } from '../common/unpackLogin';

const Login: React.FC = (): JSX.Element => {
    const formController: IFormController = useValidation(loginInitialState, validateLogin, AccountServices.LoginUser)
    
    const {email, password} = unpackLoginFormValues(formController.values);
    const {passwordError, emailError, formExecutionError} = unpackLoginFormErrors(formController.errors);

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
                            name={email.name}
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
                            name={password.name}
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