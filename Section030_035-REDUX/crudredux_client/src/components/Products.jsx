import React, { Fragment, useEffect } from 'react';
import ProductsController from '../controllers/ProductsController';
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product';
import Spinner from './Spinner';

const Products = () => {
    const controller = new ProductsController(useDispatch());
    const {products, loading, error} = useSelector(state => state.products);
    //controller.GetProducts();
    useEffect(() => {
        const downloadProducts = async () => await controller.GetProducts()
        downloadProducts()
        // eslint-disable-next-line
    }, []);

    
    
    if(loading) {return (
        <Fragment>
            <Spinner />
        </Fragment>
    );}

    return (
        <Fragment>
            <h2 className="text-center my-5">
                Listado de Productos
            </h2>

            {error? <p className="font-weight-bold alert alert-danger mt-4 text-center">Hubo un error</p> : null}
            {loading? <p className="font-weight-bold text-center">Hubo un error</p> : null}

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length===0? 'No hay productos': (
                        products.map(product => (
                            <tr key={product.id}>
                                <Product product={product}/>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
    );
}
 
export default Products;