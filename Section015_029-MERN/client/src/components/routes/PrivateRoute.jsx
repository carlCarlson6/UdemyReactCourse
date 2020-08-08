import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';

const PrivateRoute = ({component: Component, ...props}) => {
    const {authenticated, loading, authServices} = useContext(AuthContext); 
    
    useEffect(() => { authServices.GetAuthenticatedUser() }, [])

    return (
        <Route 
            {...props} 
            render={ props => !authenticated && !loading ? (
                <Redirect to="/" />
            ) : (
                <Component {...props} />
            ) }
        />
    );
}
 
export default PrivateRoute;