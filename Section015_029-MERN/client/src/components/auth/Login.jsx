import React, { useState } from 'react';
import LoginController from '../../controller/LoginController';
import UserLogin from '../../common/models/UserLogin';
import {Link} from 'react-router-dom';

const Login = () => {

    const [userLogin, setUserLogin] = useState(new UserLogin('', ''));
    const setError = useState(false)[1];

    const loginController = new LoginController(setUserLogin, setError);

    return (
        <div className="form-usuario">
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