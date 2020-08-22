import React, { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import { IFormController } from '../controllers/IFormController';
import useValidation from '../hooks/useValidation';
import { newProductInitialState } from '../common/InitialStates';
import { validateNewProduct } from '../validations/NewProductValidation';
import { ProductServices } from '../services/ProductServices';
import { FormTitle, Form, Field, FormError, InputSubmitForm } from '../components/styles/ui/FormStyles';
import { FireBaseContext } from '../firebase';
import FileUploader from 'react-firebase-file-uploader';
import { unpackNewProductFormValues, unpackNewProductFormErrors } from '../common/unpackNewProduct';

const NewProduct: React.FC = (): JSX.Element => {
    const {user, firebase} = React.useContext(FireBaseContext);
    const formController: IFormController = useValidation(newProductInitialState, validateNewProduct, ProductServices.CreateAddProductFn(user, firebase));

    const {name, company, url, description, image} = unpackNewProductFormValues(formController.values);
    const {nameError, companyError, urlError, descriptionError, imageError, formExecutionError} = unpackNewProductFormErrors(formController.errors);

    return (
        <Fragment>
            <Layout>
                <FormTitle>Nuevo producto</FormTitle>

                <Form
                    onSubmit={formController.handleSubmit}
                >
                    <fieldset>
                        <legend>Informacion general</legend>
                    
                        <Field>
                            <label htmlFor="name">Nombre</label>
                            <input 
                                type="text"
                                id="name"
                                placeholder="Nombre del producto"
                                name={name.name}
                                onChange={formController.handleChange}
                                value={name.value}
                                onBlur={formController.handleBlur}
                            />
                        </Field>
                        {nameError && <FormError>{nameError.message}</FormError>}

                        <Field>
                            <label htmlFor="company">Empresa</label>
                            <input 
                                type="text"
                                id="company"
                                placeholder="Nombre de la empresa"
                                name={company.name}
                                onChange={formController.handleChange}
                                value={company.value}
                                onBlur={formController.handleBlur}
                            />
                        </Field>
                        {companyError && <FormError>{companyError.message}</FormError>}

                        <Field>
                            <label htmlFor="url">Url</label>
                            <input 
                                type="url"
                                id="url"
                                placeholder="Url al producto"
                                name={url.name}
                                onChange={formController.handleChange}
                                value={url.value}
                                onBlur={formController.handleBlur}
                            />
                        </Field>
                        {urlError && <FormError>{urlError.message}</FormError>}

                    </fieldset>
  
                    <fieldset>
                        <legend>Sobre tu producto</legend>
  
                        <Field>
                            <label htmlFor="">Descripcion</label>
                            <textarea
                                id="Descripcion"
                                name={description.name}
                                placeholder="Describa brevemente su producto"
                                onChange={formController.handleChange}
                                value={description.value}
                                onBlur={formController.handleBlur}
                            />
                        </Field>
                        {descriptionError && <FormError>{descriptionError.message}</FormError>}

                        <Field>
                            <label htmlFor="image">Imagen</label>
                            <FileUploader 
                                accept="image/*"
                                id="image"
                                name={image.name}
                                onChange={formController.handleChange}
                                value={image.value}
                                onBlur={formController.handleBlur}
                                randomizeFilename
                                storageRef={firebase.storage().ref("images")}
                                onUploadStart={handleUploadStart}
                                onUploadError={handleUploadError}
                                onUploadSuccess={handleUploadSuccess}
                                onProgress={handleProgress}
                            />
                        </Field>
                        {imageError && <FormError>{imageError.message}</FormError>}

                    </ fieldset>
                        <InputSubmitForm 
                            type="submit"
                            value="Añadir producto"
                        >CREAR PRODUCTO</ InputSubmitForm>

                        {formExecutionError && <FormError>{formExecutionError.message}</FormError>}

                   

                </Form>

            </Layout>
        </Fragment>
    );
}


export default NewProduct;