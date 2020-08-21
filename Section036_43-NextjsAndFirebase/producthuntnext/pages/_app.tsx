import {AppProps} from 'next/app';
import {firebase, FireBaseContext} from '../firebase'
import { Component } from 'react';

const MyApp = ({Component, pageProps}: AppProps) => {

    return (
        <FireBaseContext.Provider
            value={{
                firebase
            }}
        >
            <Component {...pageProps} />
        </ FireBaseContext.Provider>
    );
}

export default MyApp;