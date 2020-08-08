import React, { useContext } from 'react';
import taskContext from '../../context/tasks/TaskContext';
import projectContext from '../../context/projectos/ProjectContext';
import TaskController from '../../controller/TaskController';

const Tarea = ({task}) => {
    const {project} = useContext(projectContext);
    const {taskServices} = useContext(taskContext)

    const taskController = new TaskController({taskServices});

    return (
        <li className="tarea sombra">
            <p>{task.name}</p>
            
            <div className="estado">
                {task.state
                    ?
                        (<button
                            type="button"
                            className="completo"
                            onClick={() => taskController.MarkIncomplete(task, project._id)}
                        >Completo</button>)
                    :
                
                        (<button
                            type="button"
                            className="incompleto"
                            onClick={() => taskController.MarkComplete(task, project._id)}
                        >Incompleto</button>)
                }
            </div>
        
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => taskController.SelectTask(task)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-eliminar"
                    onClick={() => taskController.Delete(task._id, project._id)}
                >Eliminar</button>
            </div>

        </li>
    );
}
 
export default Tarea;