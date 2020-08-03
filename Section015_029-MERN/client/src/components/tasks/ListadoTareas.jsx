import React, { Fragment, useContext, useEffect } from 'react';
import Tarea from './Tarea';
import {mockProjectTasks} from '../../common/data/mocks';
import projectContext from '../../context/projectos/ProjectContext';
import taskContext from '../../context/tasks/TaskContext';

const ListadoTareas = () => {
    const {project, projectServices} = useContext(projectContext);
    const {projectTasks} = useContext(taskContext);

    if(!project) return <h2>Seleccion un proyecto</h2>;

    return (
        <Fragment>
            <h2>Proyecto: {project.name}</h2>

            <ul className="listado-tareas">
                {projectTasks.length === 0 
                    ? 
                        (<li className="tarea"><p>No hay tareas</p></li>)
                    : 
                        projectTasks.map(task => (
                            <Tarea
                                key={task.id}
                                task={task}
                            />
                    ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => projectServices.DeleteProject(project.id)}
            >Eliminar Projecto &times;</button>

        </Fragment>
    );
}
 
export default ListadoTareas;