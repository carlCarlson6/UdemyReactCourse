import {validateFormNoEmptyFields} from '../common/utils/ValidateForm';
import Swal from 'sweetalert2';
import {addProductAction} from '../actions/product/AddProductAction'
import {deleteProductAction} from '../actions/product/DeleteProductAction'
import {getProductsAction} from '../actions/product/GetProductsAction'
import { getProductToEditAction, editProductAction } from '../actions/product/EditProductAction';
import { showAlertAction } from '../actions/alert/ShowAlertAction';
import { hideAlertAction } from '../actions/alert/HideAlertAction';

class ProductsController {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    
    async GetProducts() {
        await this.dispatch(await getProductsAction());
    }

    async AddProduct(event, newProduct, history) {
        event.preventDefault();

        const validation = validateFormNoEmptyFields(newProduct);
        if(!validation) { 
            const alert = {message: 'Ambos campos son obligatorios', classes: 'alert alert-danger text-center text-uppercase p3'}
            this.dispatch(showAlertAction(alert));
            return;
        }
        
        this.dispatch(hideAlertAction());

        await this.dispatch(await addProductAction(newProduct));
        history.push('/');
    }

    async DeleteProduct(id) {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "¿Desea eliminar este producto del listado?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: "No"
        }).then(async (result) => {
            if(result.value) {
                await this.dispatch(await deleteProductAction(id));
            }
        })
    }

    RedirectProductToEdit(product, history) {
        this.dispatch(getProductToEditAction(product));
        history.push(`productos/editar/${product.id}`);
    }

    async EditProduct(event, editedProduct, history) {
        event.preventDefault();

        const validation = validateFormNoEmptyFields(editedProduct);
        if(!validation) { 
            const alert = {message: 'Ambos campos son obligatorios', classes: 'alert alert-danger text-center text-uppercase p3'}
            this.dispatch(showAlertAction(alert));
            return;
        }

        this.dispatch(hideAlertAction());

        await this.dispatch(await editProductAction(editedProduct));
        history.push('/');
    }

}

export default ProductsController;