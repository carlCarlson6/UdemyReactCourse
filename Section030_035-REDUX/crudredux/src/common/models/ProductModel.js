import {v4 as generateId} from 'uuid';

class ProductModel {
    constructor(name, price) {
        this.id = generateId();
        this.name = name;
        this.price = price;
    }
}

export default ProductModel;