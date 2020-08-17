import { createNewProductAction } from "../actions/ProductActions";

class NewProductController {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    

    SubmitNewProduct(event) {
        event.preventDefault();

        this.AddProduct();
    }

    AddProduct() {
        this.dispatch(createNewProductAction)
    }

}

export default NewProductController;