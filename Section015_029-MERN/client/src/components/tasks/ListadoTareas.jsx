import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import {mockProjectTasks} from '../../common/data/mocks';
import projectContext from '../../context/projectos/ProjectContext';

const ListadoTareas = () => {
    const {project} = useContext(projectContext);

    if(!project) return <h2>Seleccion un proyecto</h2>;

    return (
        <Fragment>
            <h2>Proyecto: {project.name}</h2>

            <ul className="listado-tareas">
                {mockProjectTasks.length === 0 
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : mockProjectTasks.map(task => (
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
            >Eliminar Projecto &times;</button>

        </Fragment>
    );
}
 
export default ListadoTareas;