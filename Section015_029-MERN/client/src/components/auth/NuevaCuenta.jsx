import React, { useState } from 'react';
import NewUser from '../../common/models/NewUser';
import {Link} from 'react-router-dom';
import NewAccountController from '../../controller/NewAccountController';

const NuevaCuenta = () => {

    const [newUser, setNewUser] = useState(new NewUser());
    const setError = useState(false)[1];

    const newAccountController = new NewAccountController(setNewUser, setError);

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={(event) => {newAccountController.CreateAccount(newUser, event)}}
                >

                    <div className="campo-form">                        
                        <label htmlFor="name">Nombre Usuario</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu Nombre de Usuario"
                            value={newUser.userName}
                            onChange={(event) => {newAccountController.UpdateNewAccountData(newUser, event)}}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={newUser.email}
                            onChange={(event) => {newAccountController.UpdateNewAccountData(newUser, event)}}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={newUser.password}
                            onChange={(event) => {newAccountController.UpdateNewAccountData(newUser, event)}}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmPassword">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Repite tu Password"
                            value={newUser.confirmPassword}
                            onChange={(event) => {newAccountController.UpdateNewAccountData(newUser, event)}}
                        />
                    </div>

                    <div>
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>

                </form>

                <Link to={'/'} className="enlace-cuenta">
                    ¿Ya tienes una cuenta? Haz login
                </Link>

            </div>
        </div>
    );
}
 
export default NuevaCuenta;