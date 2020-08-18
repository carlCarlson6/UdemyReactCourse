import {validateFormNoEmptyFields} from '../common/utils/ValidateForm';
import Swal from 'sweetalert2';
import {createNewProductAction} from '../actions/product/CreateNewProductAction'
import {deleteProductAction} from '../actions/product/DeleteProductAction'
import {getProductsAction} from '../actions/product/GetProductsAction'

class ProductsController {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    
    GetProducts() {
        this.dispatch(getProductsAction());
    }

    AddProduct(event, newProduct) {
        event.preventDefault();

        const validation = validateFormNoEmptyFields(newProduct);
        if(!validation) { return };

        this.dispatch(createNewProductAction(newProduct));
    }

    DeleteProduct(id) {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "¿Desea eliminar este producto del listado?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: "No"
        }).then((result) => {
            if(result.value) {
                this.dispatch(deleteProductAction(id));
            }
        })
    }

    RedirectProductToEdit(product, history) {
        history.push(`productos/editar/${product.id}`);
    }

    SubmitEditProduct(event, editProduct) {
        event.preventDefault();

        const validation = validateFormNoEmptyFields(editProduct);
        if(!validation) { return };

        //this.dispatch(<action>(editProduct));
    }

}

export default ProductsController;