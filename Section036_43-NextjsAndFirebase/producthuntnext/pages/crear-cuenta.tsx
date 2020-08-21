import React, { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import { Form, Field, InputSubmitForm } from '../components/styles/ui/FormStyles';

const CreateAccount: React.FC = (): JSX.Element => {

    return (
        <Fragment>
            <Layout>
                <h1>Crear Cuenta</h1>

                <Form>
                    <Field>
                        <label htmlFor="name">Nombre</label>
                        <input 
                            type="text"
                            id="name"
                            placeholder="Tu Nombre"
                            name="name"
                        />
                    </Field>

                    <Field>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            placeholder="Tu Email"
                            name="email"
                        />
                    </Field>

                    <Field>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            placeholder="Tu Contraseña"
                            name="password"
                        />
                    </Field>

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