import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/projects/Proyectos';
import ProjectState from './context/projectos/ProjectState';
import TaskState from './context/tasks/TaskState';
import AlertState from './context/alerts/AlertState';


const App = () => {
    return (
        <ProjectState>
            <TaskState>
                <AlertState>
                    <BrowserRouter>
                        <Switch>            
                            <Route exact path="/" component={Login} />
                            <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                            <Route exact path="/proyectos" component={Proyectos} />
                        </Switch>
                    </BrowserRouter>
                </AlertState>
            </TaskState>
        </ProjectState>
    );
}

export default App;
