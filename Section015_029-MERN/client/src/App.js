import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/projects/Proyectos';
import ProjectState from './context/projectos/ProjectState';
import TaskState from './context/tasks/TaskState';
import AlertState from './context/alerts/AlertState';
import AuthState from './context/auth/AuthState';
import setAuthTokenHeader from './config/AuthTokenHeader';
import PrivateRoute from './components/routes/PrivateRoute';

const token = localStorage.getItem('token');
if(token) {
    setAuthTokenHeader(token);
}

const App = () => {
    return (
        <ProjectState>
            <TaskState>
                <AlertState>
                    <AuthState>
                        <BrowserRouter>
                            <Switch>            
                                <Route exact path="/" component={Login} />
                                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                                <PrivateRoute exact path="/proyectos" component={Proyectos} />
                            </Switch>
                        </BrowserRouter>
                    </AuthState>
                </AlertState>
            </TaskState>
        </ProjectState>
    );
}

export default App;
