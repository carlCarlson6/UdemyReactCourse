import {v4 as generateId} from 'uuid';

class Product {
    constructor(name, price) {
        this.id = generateId();
        this.name = name;
        this.price = price;
    }
}

export default Product;