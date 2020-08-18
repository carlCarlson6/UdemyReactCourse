import {actionTypes} from '../types';
import {axiosClient, apolloClient} from '../common/HttpClient';
import {gql} from '@apollo/client'
import Swal from 'sweetalert2';

const addProduct = () => ({type: actionTypes.ADD_PRODUCT})
const addProductSuccess = product => ({type: actionTypes.ADD_PRODUCT_SUCCESS, payload: product})
const addProductFailure = () => ({type: actionTypes.ADD_PRODUCT_FAILURE})

export const createNewProductAction = product => {
    return async dispatch => {
        dispatch(addProduct());
        try {
            const queryResult = await apolloClient.mutate({
                mutation: gql`mutation AddProduct($name: String! $price: Float!) {addProduct(name: $name, price: $price) {id name price}}`, 
                variables: {name: product.name, price: parseFloat(product.price)}
            });
            dispatch(addProductSuccess(product));
            Swal.fire('Correcto', 'El producto se agregó correctamente', 'success')
        } catch(error) {
            console.log(error)
            dispatch(addProductFailure());
            Swal.fire({icon: 'error', title: 'Oops...', text: 'Parece que hubo un error, itentalo de nuevo'})
        }
    }
}

const downloadProducts = () => ({type: actionTypes.PRODUCTS_DOWNLOAD_START})
const downloadProductsSuccess = products => ({type: actionTypes.PRODUCTS_DOWNLOAD_SUCCESS, payload: products})
const downloadProductsFailure = () => ({type: actionTypes.PRODUCTS_DOWNLOAD_FAILURE})

export const getProductsAction = () => {
    return async dispatch => {
        dispatch(downloadProducts());
        try {
            const queryResult = await apolloClient.query({query: gql`query {products {id name price}}`})
            const products = queryResult.data.products;
            dispatch(downloadProductsSuccess(products));
        } catch(error) {
            console.log(error);
            dispatch(downloadProductsFailure());
        }
    }
}

const getProductToDelete = id => ({type: actionTypes.PRODUCT_DELETE_GET, payload: id})
const deleteProductSuccess = () => ({type: actionTypes.PRODUCT_DELETE_SUCCESS})
const deleteProductFailure = () => ({type: actionTypes.PRODUCT_DELETE_FAILURE})

export const deleteProductAction = id => {
    return async dispatch => {
        dispatch(getProductToDelete(id));
        try {
            await axiosClient.delete(`/products/${id}`);
            dispatch(deleteProductSuccess());
            Swal.fire(
                'Eliminado',
                'El producto ha sido eliminado correctamente.',
                'success'
            )
        } catch (error) {
            dispatch(deleteProductFailure());
        }
    }
}