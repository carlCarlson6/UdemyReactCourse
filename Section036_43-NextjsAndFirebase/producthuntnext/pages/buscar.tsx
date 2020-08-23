import React, { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import { useRouter } from "next/router";
import { IProduct } from '../common/models/entities/IProduct';
import { FireBaseContext } from '../database/firebase/Context';
import { ProductServices } from '../logic/services/ProductServices';
import ProductDetails from '../components/layout/ProductDetails';

const Searching: React.FC = (): JSX.Element => {
    const searchTerm: any = useRouter().query.q

    const [products, setProducts] = React.useState<Array<IProduct>>([]);
    const [resultSearchProducts, setResultSearchProducts] = React.useState<Array<IProduct>>([]);
    const {firebase} = React.useContext(FireBaseContext);
    
    React.useEffect(()=>{
        ProductServices.GetProductsByDate(firebase, setProducts);
        const filter = products.filter(product => {return (
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        )});
        setResultSearchProducts(filter);
    },[searchTerm])

    return (
        <Fragment>
            <div>
                <Layout>
                    <div className="listado-productos">
                        <div className="contenedor">
                            <div className="bg-white">
                                <ul>
                                    {resultSearchProducts.map(product => (
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


export default Searching;