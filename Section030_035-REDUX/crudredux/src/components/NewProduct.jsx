import React, { useState } from 'react';
import NewProductController from '../controllers/NewProductController';
import { useDispatch } from 'react-redux';
import Product from '../common/models/Product';
import handleOnChange from '../common/utils/HandleOnChange';

const NewProduct = () => {
    const [newProduct, setNewProduct] = useState(new Product('', 0))
    const controller = new NewProductController(useDispatch());

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                        <form
                            onSubmit={(event) => controller.SubmitNewProduct(event, newProduct)}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="name"
                                    value={newProduct.name}
                                    onChange={(event) => {handleOnChange(event, newProduct, setNewProduct)}}
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="price"
                                    value={newProduct.price}
                                    onChange={(event) => {handleOnChange(event, newProduct, setNewProduct)}}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NewProduct;