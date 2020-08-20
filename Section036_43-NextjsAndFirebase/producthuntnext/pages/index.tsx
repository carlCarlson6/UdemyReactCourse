import React, { Fragment } from 'react';
import { Heading } from '../styles/Heading';
import Layout from '../components/layout/Layout';

const Home: React.FC = (): JSX.Element => {

    return (
        <Fragment>
            <div>
                <Layout>
                    <h1>INICIO</h1>
                </Layout>
            </div>
        </Fragment>
    );
}


export default Home;