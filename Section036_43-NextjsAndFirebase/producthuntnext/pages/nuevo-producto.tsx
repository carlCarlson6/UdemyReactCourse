import React, { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import { IFormController } from '../common/models/controllers/IFormController';
import useForm from '../logic/hooks/useForm';
import { newProductInitialState } from '../common/data/InitialStates';
import { validateNewProduct } from '../logic/validations/NewProductValidation';
import { ProductServices } from '../logic/services/ProductServices';
import { FormTitle, Form, Field, FormError, InputSubmitForm } from '../components/styles/ui/FormStyles';
import { FireBaseContext } from '../database/firebase';
import FileUploader from 'react-firebase-file-uploader';
import { unpackNewProductFormValues, unpackNewProductFormErrors } from '../common/utils/unpackValues/unpackNewProduct';
import { getHandleUploadStart, getHandleUploadError, getHandleUploadSuccess, getHandleProgress } from '../common/utils/handlers/ImageUploadHandlers';
import Spinner from '../components/Spinner';
import Error404 from '../components/layout/404';

const NewProduct: React.FC = (): JSX.Element => {
    const [, setImageName] = React.useState<string>('');
    const [uplaoding, setUploading] = React.useState<any>(false);
    const [, setProgress] = React.useState<number>(0);
    const [imageUrl, setImageUrl] = React.useState<string>('');

    const {user, firebase} = React.useContext(FireBaseContext);
    const formController: IFormController = useForm(newProductInitialState, validateNewProduct, ProductServices.CreateAddProductFn(user, firebase, imageUrl));

    const {name, company, url, description} = unpackNewProductFormValues(formController.values);
    const {nameError, companyError, urlError, descriptionError, formExecutionError} = unpackNewProductFormErrors(formController.errors);

    if(formController.submitForm) {
        return (
            <Fragment>
                <Layout>
                    <p>Creando producto</p>
                    <Spinner />
                </Layout>
            </Fragment>
        );
    }
    
    if(!user) {
        return (
            <Layout>
                <Error404 message='No dispones de acceso'/>
            </Layout>
        )
    }

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
                                name="image"
                                randomizeFilename
                                storageRef={firebase.storage.ref("products")}
                                onUploadStart={getHandleUploadStart(setProgress, setUploading)}
                                onUploadError={getHandleUploadError(setUploading)}
                                onUploadSuccess={getHandleUploadSuccess(setProgress, setUploading, setImageName, firebase, setImageUrl)}
                                onProgress={getHandleProgress(setProgress)}
                            />
                        </Field>


                    </ fieldset>
                    { uplaoding? (
                        <Fragment>
                            <p>Subiendo imagen</p>
                            <Spinner />
                        </Fragment>
                    ): (
                        <InputSubmitForm 
                        type="submit"
                        value="Añadir producto"
                        >CREAR PRODUCTO</ InputSubmitForm>
                    ) }

                    {formExecutionError && <FormError>{formExecutionError.message}</FormError>}

                </Form>

            </Layout>
        </Fragment>
    );

}


export default NewProduct;