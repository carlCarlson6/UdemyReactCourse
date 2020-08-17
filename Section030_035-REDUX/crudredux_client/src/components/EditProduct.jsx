import React, {useState} from 'react';
import ProductModel from '../common/models/ProductModel';
import handleOnChange from '../common/utils/HandleOnChange';
import { useSelector } from 'react-redux';

const EditProduct = () => {
    const [newProduct, setNewProduct] = useState(new ProductModel('', 0))
    const {productEdit, loading, error} = useSelector((state) => state.productsState);

    if(!productEdit) {return null };
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        <form>
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="name"
                                    value={productEdit.name}
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
                                    value={productEdit.price}
                                    onChange={(event) => {handleOnChange(event, newProduct, setNewProduct)}}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Guardar cambios</button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EditProduct;