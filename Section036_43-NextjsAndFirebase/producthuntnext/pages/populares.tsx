import React, { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import {FireBaseContext} from '../database/firebase';
import { IProduct } from '../common/models/entities/IProduct';
import { ProductServices } from '../logic/services/ProductServices';
import ProductDetails from '../components/layout/ProductDetails';

const Populars: React.FC = (): JSX.Element => {
    const [products, setProducts] = React.useState<Array<IProduct>>([]);
    const {firebase} = React.useContext(FireBaseContext);
    
    React.useEffect(()=>{
        ProductServices.GetProductsByVotes(firebase, setProducts);
    },[])

    return (
        <Fragment>
            <div>
                <Layout>
                    <div className="listado-productos">
                        <div className="contenedor">
                            <div className="bg-white">
                                <ul>
                                    {products.map(product => (
                                        <ProductDetails 
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        </Fragment>
    );
}


export default Populars;