import React, { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ProductsController from '../controllers/ProductsController';
import { useDispatch } from 'react-redux';

const Product = ({product}) => {
    const {name, price, id} = product;
    const controller = new ProductsController(useDispatch());
    const history = useHistory();

    return (
        <Fragment>
            <td><p>{name}</p></td>
            <td><p><span className="font-weight-bold">{price}€</span></p></td>
            <td className="acciones"><p>
                <button
                    type="button"
                    onClick={() => controller.RedirectProductToEdit(product, history)}
                    className="btn btn-primary mr-2"
                >Editar</ button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => controller.DeleteProduct(id)}
                >Eliminar</button>
            </p></td>
        </Fragment>
    );
}
 
export default Product;