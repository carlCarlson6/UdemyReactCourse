import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { FireBaseContext } from '../../database/firebase/Context';
import { IProduct } from '../../common/models/entities/IProduct';
import { ProductServices } from '../../logic/services/ProductServices';
import Error404 from '../../components/layout/404';
import Layout from '../../components/layout/Layout';
import { H1, ProductContainer, CommentsListTitle, VotesContainer } from '../../components/styles/layout/ProductViewStyles';
import { es } from 'date-fns/locale';
import formatDistanteToNow from 'date-fns/formatDistanceToNow';
import {Field, InputSubmitForm, FormError} from '../../components/styles/ui/FormStyles';
import { IFormController } from '../../common/models/controllers/IFormController';
import useForm from '../../logic/hooks/useForm';
import { commnetInitialState } from '../../common/data/InitialStates';
import { validateComment } from '../../logic/validations/AddComentValidation';
import { IFormValue } from '../../common/models/entities/IFormValue';
import { IError } from '../../common/models/entities/IError';
import {ButtonLink} from '../../components/styles/ui/ButtonLink';
import Spinner from '../../components/Spinner';

const Product: React.SFC = () => {
    const router = useRouter();
    const {query: {id}} = router;
    const [product, setProduct] = React.useState<IProduct>();
    const [error, setError] = React.useState<boolean>(false);
    const { firebase, user }= React.useContext(FireBaseContext);
    const formController: IFormController = useForm(commnetInitialState, validateComment, ProductServices.AddCommentToProduct)
    const comment: IFormValue = formController.values.find(formValue => formValue.name === 'comment');
    const commentError: IError = formController.errors.find(error => error.name === 'comment');

    React.useEffect(() => {
        const getProduct = async () => {
        if(id) { 
            try {
                const retrivedProduct = await ProductServices.GetProductById(id, firebase);
                setProduct(retrivedProduct);
            } catch(error) {
                setError(true);
            }
        }}
        getProduct();
    },[id]);

    if(!product && !error) {
        return (
        <Fragment>
            <p>Cargando ...</p>
            <Spinner />
        </Fragment>)
    };

    return (
        <Fragment >
            <Layout>
                { error? 
                    <Error404 message='Producto no encontrado'/>
                    : (
                        <div className="contenedor">
                            <H1>{product.name}</H1>

                            <ProductContainer>
                                <div>
                                    <p>Publicado hace: {formatDistanteToNow(new Date(product.createdAt), {locale:es})}</p>
                                    <p>Por: {product.createdBy.name}</p>

                                    <img src={product.imageUrl} />

                                    <p>{product.description}</p>

                                    { user? (
                                        <Fragment>
                                            <h2>Agrega tu comentario</h2>
                                            <form onSubmit={formController.handleSubmit}>
                                                <Field>
                                                    <input 
                                                        type="text"
                                                        name={comment.name}
                                                        id={comment.name}
                                                        placeholder="Deja un comentario"
                                                        onChange={formController.handleChange}
                                                        value={comment.value}
                                                        onBlur={formController.handleBlur}
                                                    />
                                                </Field>
                                                {commentError? <FormError>{commentError.message}</FormError>: null}
                                                <InputSubmitForm
                                                    type="submit"
                                                    value="Agregar Comentario"
                                                >Agregar Comentario</ InputSubmitForm>
                                            </form>
                                        </Fragment>
                                    ) : (
                                        null
                                    ) }

                                    <CommentsListTitle>Comentarios</CommentsListTitle>
                                    {product.comments.map(comment => (
                                        <li>
                                            <p>{comment.message}</p>
                                            <p>Escrito por: {comment.createdBy.name}</p>
                                        </li>
                                    ))}

                                </div>

                                <aside>
                                    <ButtonLink
                                        target="_blank"
                                        bgColor={true}
                                        href={product.url}
                                    >Visituar URL</ButtonLink>

                                    <VotesContainer>
                                        <p>{product.votes} votos</p>
                                        { user? (
                                            <ButtonLink>Votar</ButtonLink>
                                        ) : (
                                            null
                                        ) }

                                    </VotesContainer>
                                        
                                </aside>
                            </ProductContainer>

                        </div>
                    ) 
                }
            </ Layout>
        </ Fragment> 
    );
}
 
export default Product;