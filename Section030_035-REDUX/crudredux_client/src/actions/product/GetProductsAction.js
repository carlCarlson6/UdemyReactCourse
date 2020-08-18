import {actionTypes} from '../../types';
import {apolloClient} from '../../common/HttpClient';
import { productsQuery } from '../../common/Queries';

const downloadProducts = () => ({type: actionTypes.PRODUCTS_DOWNLOAD_START})
const downloadProductsSuccess = products => ({type: actionTypes.PRODUCTS_DOWNLOAD_SUCCESS, payload: products})
const downloadProductsFailure = () => ({type: actionTypes.PRODUCTS_DOWNLOAD_FAILURE})

export const getProductsAction = () => {
    return async dispatch => {
        dispatch(downloadProducts());
        try {
            const queryResult = await apolloClient.query({query: productsQuery})
            const products = queryResult.data.products;
            dispatch(downloadProductsSuccess(products));
        } catch(error) {
            console.log(error);
            dispatch(downloadProductsFailure());
        }
    }
}