import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductModel from '../common/models/ProductModel';
import handleOnChange from '../common/utils/HandleOnChange';
import ProductsController from '../controllers/ProductsController';
import { useHistory } from 'react-router-dom';
import Spinner from './Spinner';

const NewProduct = () => {
    const [newProduct, setNewProduct] = useState(new ProductModel('', 0))
    const controller = new ProductsController(useDispatch());
    const {loading, error} = useSelector((state) => state.products);
    const {alert} = useSelector((state) => state.alert);
    const history = useHistory();

    const newProductForm = (
        <form
            onSubmit={(event) => controller.AddProduct(event, newProduct, history)}
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
    )

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                        {alert? <p className={alert.classes}>{alert.message}</p> : null}

                        {loading ? <Spinner /> : newProductForm }
                        
                        {error? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null}

                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NewProduct;