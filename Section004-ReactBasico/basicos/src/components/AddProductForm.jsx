import React from 'react';
import '../styles/AddProductForm.css';
import Product from '../common/models/Product';
import IDGenerator from '../common/utils/IDGenerator';

const AddProductForm = ({productos, setProductos}) => {
    
    const submitProductForm = (event) => {
        let newProductId = new IDGenerator().uuidv4();
        let newProduct = new Product(newProductId, event.target.productName, event.target.productPrice);
        console.log(`adding new product-> id:${newProduct.id}, name:${newProduct.name}, precio:${newProduct.precio}`)
        setProductos([...productos, newProduct])
    }

    return (
        <div className="AddProductFom">
            <form onSubmit={submitProductForm}>
                <label htmlFor="productName">Product Name:</label>
                <input type="text" id="productName" name="productName" /><br />
                <label htmlFor="productPrice">Price ($):</label>
                <input type="text" id="productPrice" name="productPrice" /><br />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProductForm;