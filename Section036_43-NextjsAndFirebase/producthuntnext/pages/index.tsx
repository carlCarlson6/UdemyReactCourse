import React, { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import {FireBaseContext} from '../database/firebase';
import { IProduct } from '../common/models/IProduct';
import { ProductServices } from '../logic/services/ProductServices';
import ProductDetails from '../components/layout/ProductDetails';

const Home: React.FC = (): JSX.Element => {
    const [products, setProducts] = React.useState<Array<IProduct>>([]);
    const {firebase} = React.useContext(FireBaseContext);
    
    React.useEffect(()=>{
        ProductServices.GetProductsByDate(firebase, setProducts);
    },[])

    return (
        <Fragment>
            <div>
                <Layout>
                    <div className="listado-productos">
                        <div className="contenedor">
                            <div className="bg-white">
                                {products.map(product => (
                                    <ProductDetails 
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        </Fragment>
    );
}


export default Home;