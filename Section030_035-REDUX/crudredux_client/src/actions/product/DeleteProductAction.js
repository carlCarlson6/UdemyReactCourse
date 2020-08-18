import {actionTypes} from '../../types';
import {axiosClient, apolloClient} from '../../common/HttpClient';
import Swal from 'sweetalert2';
import { deleteProductMutation } from '../../common/Queries';

const getProductToDelete = id => ({type: actionTypes.PRODUCT_DELETE_GET, payload: id})
const deleteProductSuccess = () => ({type: actionTypes.PRODUCT_DELETE_SUCCESS})
const deleteProductFailure = () => ({type: actionTypes.PRODUCT_DELETE_FAILURE})

export const deleteProductAction = id => {
    return async dispatch => {
        dispatch(getProductToDelete(id));
        try {
            await apolloClient.mutate({
                mutation: deleteProductMutation,
                variables: {id: parseInt(id)}
            });
            dispatch(deleteProductSuccess());
            Swal.fire('Eliminado', 'El producto ha sido eliminado correctamente.', 'success')
        } catch (error) {
            console.log(error)
            dispatch(deleteProductFailure());
        }
    }
}