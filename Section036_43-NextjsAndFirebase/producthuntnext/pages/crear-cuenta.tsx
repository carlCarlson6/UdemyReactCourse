import React, { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import { Form, Field, InputSubmitForm, FormTitle, FormError } from '../components/styles/ui/FormStyles';
import useForm from '../logic/hooks/useForm';
import { IFormController } from '../common/models/controllers/IFormController';
import { createAccountInitialState } from '../common/data/InitialStates';
import { validateNewAccount } from '../logic/validations/CreateAccountValidation';
import { AccountServices } from '../logic/services/AccountServices';
import { unpackCreateAccountFormValues, unpackCreateAccountFormErrors } from '../common/utils/unpackValues/unpackCreateAccount';
import Spinner from '../components/Spinner';

const CreateAccount: React.FC = (): JSX.Element => {
    const formController: IFormController = useForm(createAccountInitialState, validateNewAccount, AccountServices.CreateAccount)

    const {name, password, email} = unpackCreateAccountFormValues(formController.values);
    const {nameError, passwordError, emailError, formExecutionError} = unpackCreateAccountFormErrors(formController.errors);

    if(formController.submitForm) {
        return (
            <Fragment>
                <Layout>
                    <p>Creando cuenta</p>
                    <Spinner />
                </Layout>
            </Fragment>
        );
    }

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
                            name={name.name}
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
                        value="Crear cuenta"
                    >CREAR CUENTA</ InputSubmitForm>

                    {formExecutionError && <FormError>{formExecutionError.message}</FormError>}

                </Form>

            </Layout>
        </Fragment>
    );
}


export default CreateAccount;