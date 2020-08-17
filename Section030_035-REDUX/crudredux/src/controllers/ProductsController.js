import { getProductsAction, createNewProductAction, deleteProductAction } from "../actions/ProductActions";
import {validateFormNoEmptyFields} from '../common/utils/ValidateForm';
import Swal from 'sweetalert2';

class ProductsController {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    
    GetProducts() {
        this.dispatch(getProductsAction());
    }

    SubmitNewProduct(event, newProduct) {
        event.preventDefault();

        const validation = validateFormNoEmptyFields(newProduct);
        if(!validation) { return };

        this.AddProduct(newProduct);
    }

    AddProduct(product) {
        this.dispatch(createNewProductAction(product));
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

}

export default ProductsController;