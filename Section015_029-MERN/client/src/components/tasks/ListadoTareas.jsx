import React, { Fragment } from 'react';
import Tarea from './Tarea';
import {mockProjectTasks} from '../../common/data/mocks';

const ListadoTareas = () => {

    return (
        <Fragment>
            <h2>Proyecto: proyecto 1</h2>

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