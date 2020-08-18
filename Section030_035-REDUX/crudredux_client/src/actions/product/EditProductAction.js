import {actionTypes} from '../../types';
import {apolloClient} from '../../common/HttpClient';
import { editProductMutation } from '../../common/Queries';
import Swal from 'sweetalert2';

const getProduct = product => ({type: actionTypes.PRODUCT_EDIT_GET, payload: product})

export const getProductToEditAction = product => {
    return dispatch => dispatch(getProduct(product));

}

const editProduct = () => ({type: actionTypes.PRODUCT_EDIT_START})
const editProductSuccess = product => ({type: actionTypes.PRODUCT_EDIT_SUCCESS, payload: product})
const editProductFailure = () => ({type: actionTypes.PRODUCT_EDIT_FAILURE})

export const editProductAction = async product => {
    return async dispatch => {
        dispatch(editProduct())
        try {
            await apolloClient.mutate({
                mutation: editProductMutation,
                variables: {id: parseInt(product.id), name: product.name, price: parseFloat(product.price)}
            })
            dispatch(editProductSuccess(product))
            Swal.fire('Correcto', 'El producto se actualizó correctamente', 'success')
        } catch(error) {
            dispatch(editProductFailure())
            Swal.fire({icon: 'error', title: 'Oops...', text: 'Parece que hubo un error, itentalo de nuevo'})
        }
    }    
}