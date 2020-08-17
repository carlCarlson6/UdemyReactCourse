import {ADD_PRODUCT, ADD_PRODUCT_FAILURE, ADD_PRODUCT_SUCCESS} from '../types';
import axiosClient from '../config/HttpClient';


const addProduct = () => ({type: ADD_PRODUCT})
const addProductSuccess = (product) => ({type: ADD_PRODUCT_SUCCESS, payload: product})
const addProductFailure = (errorState) => ({type: ADD_PRODUCT_FAILURE})


export const createNewProductAction = (product) => {
    return async (dispatch) => {
        dispatch(addProduct());

        try {
            await axiosClient.post('/produtcs', product);
            dispatch(addProductSuccess(product));
        } catch(error) {
            dispatch(addProductFailure());
        }
    }
}