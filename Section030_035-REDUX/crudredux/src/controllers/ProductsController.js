import { getProductsAction } from "../actions/ProductActions";

class ProductsController {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    
    GetProducts() {
        this.dispatch(getProductsAction())
    }

}

export default ProductsController;