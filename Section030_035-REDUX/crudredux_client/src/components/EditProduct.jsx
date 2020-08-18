import React, {useState} from 'react';
import handleOnChange from '../common/utils/HandleOnChange';
import { useSelector, useDispatch } from 'react-redux';
import ProductsController from '../controllers/ProductsController';
import { useHistory } from 'react-router-dom';
import Spinner from './Spinner';

const EditProduct = () => {
    const {productEdit, loading, error} = useSelector((state) => state.productsState);
    const [productToEdit, setProductToEdit] = useState(productEdit);
    const controller = new ProductsController(useDispatch());
    const history = useHistory();

    if(!productEdit) {
        return null;
    };

    const editProductForm = (
        <form
            onSubmit={async (event) => {await controller.EditProduct(event, productToEdit, history)}}
        >
            <div className="form-group">
                <label>Nombre Producto</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Nombre Producto"
                    name="name"
                    value={productToEdit.name}
                    onChange={(event) => {handleOnChange(event, productToEdit, setProductToEdit)}}
                />
            </div>     
            <div className="form-group">
                <label>Precio Producto</label>
                <input 
                    type="number"
                    className="form-control"
                    placeholder="Precio Producto"
                    name="price"
                    value={productToEdit.price}
                    onChange={(event) => {handleOnChange(event, productToEdit, setProductToEdit)}}
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
            >Guardar cambios</button>
        </form>
    )

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        {loading ? <Spinner /> : editProductForm }
                        {error? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null}

                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EditProduct;