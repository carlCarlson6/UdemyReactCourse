import {actionTypes} from '../../types';
import {apolloClient} from '../../common/HttpClient';
import Swal from 'sweetalert2';
import { addProductMutation } from '../../common/Queries';

const addProduct = () => ({type: actionTypes.ADD_PRODUCT})
const addProductSuccess = product => ({type: actionTypes.ADD_PRODUCT_SUCCESS, payload: product})
const addProductFailure = () => ({type: actionTypes.ADD_PRODUCT_FAILURE})

export const createNewProductAction = product => {
    return async dispatch => {
        dispatch(addProduct());
        try {
            await apolloClient.mutate({
                mutation: addProductMutation, 
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