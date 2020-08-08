import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import projectContext from '../../context/projectos/ProjectContext';
import taskContext from '../../context/tasks/TaskContext';
import ProjectController from '../../controller/ProjectController';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListadoTareas = () => {
    const {project, projectServices} = useContext(projectContext);
    const {projectTasks, taskServices} = useContext(taskContext);

    if(!project) return <h2>Seleccion un proyecto</h2>;

    return (
        <Fragment>
            <h2>Proyecto: {project.name}</h2>

            <ul className="listado-tareas">
                {projectTasks.length === 0 
                    ? 
                        (<li className="tarea"><p>No hay tareas</p></li>)
                    : 
                        <TransitionGroup>
                            {projectTasks.map(task => (
                                <CSSTransition 
                                    key={task.id}
                                    timeout={200}
                                    classNames="tarea"
                                >
                                    <Tarea task={task}/>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => new ProjectController({projectServices, taskServices}).Delete(project._id, projectTasks)}
            >Eliminar Proyecto &times;</button>

        </Fragment>
    );
}
 
export default ListadoTareas;