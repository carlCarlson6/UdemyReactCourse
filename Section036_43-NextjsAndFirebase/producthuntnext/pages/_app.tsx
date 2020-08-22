import {AppProps} from 'next/app';
import {firebase, FireBaseContext} from '../database/firebase'
import { useAuthentication } from '../logic/hooks/useAuthentication';


const MyApp = ({Component, pageProps}: AppProps) => {
    const user = useAuthentication();

    return (
        <FireBaseContext.Provider
            value={{
                firebase,
                user
            }}
        >
            <Component {...pageProps} />
        </ FireBaseContext.Provider>
    );
}

export default MyApp;