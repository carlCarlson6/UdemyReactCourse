import React, { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import { IFormController } from '../common/models/controllers/IFormController';
import useForm from '../logic/hooks/useForm';
import { FormTitle, Form, Field, FormError, InputSubmitForm } from '../components/styles/ui/FormStyles';
import { loginInitialState } from '../common/data/InitialStates';
import { validateLogin } from '../logic/validations/LoginValidation';
import { AccountServices } from '../logic/services/AccountServices';
import { unpackLoginFormValues, unpackLoginFormErrors } from '../common/utils/unpackValues/unpackLogin';
import Spinner from '../components/Spinner';

const Login: React.FC = (): JSX.Element => {
    const formController: IFormController = useForm(loginInitialState, validateLogin, AccountServices.LoginUser)
    
    const {email, password} = unpackLoginFormValues(formController.values);
    const {passwordError, emailError, formExecutionError} = unpackLoginFormErrors(formController.errors);
    
    if(formController.submitForm) {
        return (
            <Fragment>
                <Layout>
                    <p>Iniciado sesion</p>
                    <Spinner />
                </Layout>
            </Fragment>
        );
    }
    
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