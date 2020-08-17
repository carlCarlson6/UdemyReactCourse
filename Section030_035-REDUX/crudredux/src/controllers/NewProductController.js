import { createNewProductAction } from "../actions/ProductActions";
import { validateFormNoEmptyFields } from "../common/utils/ValidateForm";

class NewProductController {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    

    SubmitNewProduct(event, newProduct) {
        event.preventDefault();

        const validation = validateFormNoEmptyFields(newProduct)
        if(!validation) { return };

        this.AddProduct(newProduct);
    }

    AddProduct(product) {
        this.dispatch(createNewProductAction(product))
    }

}

export default NewProductController;