import React, { Fragment } from 'react';
import Task from '../../common/models/Task';
import Tarea from './Tarea';

const ListadoTareas = () => {
    
    const projectTasks = [new Task("tarea 1", true), new Task("tarea 2"), new Task("tarea 3"), new Task("tarea 4", true)]

    return (
        <Fragment>
            <h2>Proyecto: proyecto 1</h2>

            <ul className="listado-tareas">
                {projectTasks.length === 0 
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : projectTasks.map(task => (
                        <Tarea
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