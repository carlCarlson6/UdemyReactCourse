import React, { Fragment } from 'react';
import Layout from '../components/layout/Layout';

const NewProduct: React.FC = (): JSX.Element => {

    return (
        <Fragment>
            <div>
                <Layout>
                    <h1>Nuevo Producto</h1>
                </Layout>
            </div>
        </Fragment>
    );
}


export default NewProduct;