import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProductsController from '../controllers/ProductsController';
import { useDispatch } from 'react-redux';

const Product = ({product}) => {
    const {name, price, id} = product;
    const controller = new ProductsController(useDispatch());

    return (
        <Fragment>
            <td><p>{name}</p></td>
            <td><p><span className="font-weight-bold">{price}€</span></p></td>
            <td className="acciones"><p>
                <Link 
                    to={`productos/editar/${id}`}
                    className="btn btn-primary mr-2"
                >Editar</ Link>
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