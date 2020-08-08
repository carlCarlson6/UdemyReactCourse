import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/AuthContext';

const Barra = () => {

    const {user, authServices} = useContext(AuthContext);

    useEffect(() => {
        authServices.GetAuthenticatedUser();
    }, [])

    return (
        <header className="app-header">
            {user ? <p className="nombre-usuario">Hola <span>{user.name}</span> </p> : null }

            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={() => authServices.LogOut()}
                >Cerrar Sesion</button>
            </nav>

        </header>
    );

}

export default Barra;