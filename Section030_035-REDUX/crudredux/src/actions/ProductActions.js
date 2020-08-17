import {ADD_PRODUCT, ADD_PRODUCT_FAILURE, ADD_PRODUCT_SUCCESS, PRODUCTS_DOWNLOAD_START, PRODUCTS_DOWNLOAD_SUCCESS, PRODUCTS_DOWNLOAD_FAILURE} from '../types';
import axiosClient from '../config/HttpClient';
import Swal from 'sweetalert2';


const addProduct = () => ({type: ADD_PRODUCT})
const addProductSuccess = (product) => ({type: ADD_PRODUCT_SUCCESS, payload: product})
const addProductFailure = () => ({type: ADD_PRODUCT_FAILURE})

export const createNewProductAction = (product) => {
    return async (dispatch) => {
        dispatch(addProduct());

        try {
            await axiosClient.post('/products', product);
            dispatch(addProductSuccess(product));
            Swal.fire('Correcto', 'El producto se agregó correctamente', 'success')
        } catch(error) {
            dispatch(addProductFailure());
            Swal.fire({icon: 'error', title: 'Oops...', text: 'Parece que hubo un error, itentalo de nuevo'})
        }
    }
}


const downloadProducts = () => ({type: PRODUCTS_DOWNLOAD_START})
const downloadProductsSuccess = (products) => ({type: PRODUCTS_DOWNLOAD_SUCCESS, payload: products})
const downloadProductsFailure = () => ({type: PRODUCTS_DOWNLOAD_FAILURE})

export const getProductsAction = () => {
    return async (dispatch) => {
        dispatch(downloadProducts())
        try {
            const products = (await axiosClient.get('/products')).data;
            dispatch(downloadProductsSuccess(products));
        } catch(error) {
            dispatch(downloadProductsFailure());
        }
    }
}