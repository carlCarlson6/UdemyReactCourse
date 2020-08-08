import React, { useState, useEffect, useContext } from 'react';
import LoginController from '../../controller/LoginController';
import UserLogin from '../../common/models/UserLogin';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alerts/AlertContext';
import AuthContext from '../../context/auth/AuthContext';

const Login = (props) => {

    const [userLogin, setUserLogin] = useState(new UserLogin('', ''));
    const {alert, alertServices} = useContext(AlertContext);
    const {message, authenticated, authServices} = useContext(AuthContext);
    const loginController = new LoginController({setUserLogin, alertServices, authServices});

    useEffect(() => {
        if(authenticated) props.history.push('/proyectos');
        if(message) loginController.ShowAlert(message)
    }, [message, authenticated, props.history]);

    return (
        <div className="form-usuario">
            { alert ? (<div className={`alerta ${alert.category}`}>{alert.message}</div>) : null }
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={(event) => loginController.Login(userLogin, event)}
                >
                    
                    <div className="campo-form">
                        
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={userLogin.email}
                            onChange={(event) => loginController.UpdateLoginData(userLogin, event)}
                        />
                    </div>

                    <div className="campo-form">
                        
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={userLogin.password}
                            onChange={(event) => loginController.UpdateLoginData(userLogin, event)}
                        />
                    </div>

                    <div>
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>

                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener cuenta
                </Link>

            </div>
        </div>
    );
}
 
export default Login;