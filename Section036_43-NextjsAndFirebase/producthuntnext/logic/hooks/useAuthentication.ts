import React from 'react';
import {firebase} from '../../database/firebase';
import { User } from 'firebase';

export const useAuthentication = () => {
    const [authenticatedUser, setAuthenticatedUser] = React.useState<User>(null);

    React.useEffect(() => {
        const unsuscribe = firebase.auth.onAuthStateChanged(user => {
            if(user) {
                setAuthenticatedUser(user);
            } else {
                setAuthenticatedUser(null);
            }
        });
        return () => unsuscribe();
    }, [])

    return authenticatedUser;

}