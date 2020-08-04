import React, {useContext, useState} from 'react';
import projectContext from '../../context/projectos/ProjectContext';
import taskContext from '../../context/tasks/TaskContext';
import TaskController from '../../controller/TaskController';
import Task from '../../common/models/Task';

const FormTarea = () => {
    const {project} = useContext(projectContext);
    const {taskServices} = useContext(taskContext);

    const [task, setTask] = useState(new Task('', ''));
    const [error, setError] = useState(false);

    const taskController = new TaskController({taskServices, setTask, setError});

    const errorMessageJsx = <p className="mensaje error">El nombre de la tarea es obligatorio</p>

    if(!project) return null;    
    
    return (
        <div className="formulario">
            <form
                onSubmit={event => taskController.CreateTask(task, project, event)}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la Tarea..."
                        name="name"
                        value={task.name}
                        onChange={event => taskController.UpdateNewTaskData(task, event)}
                    />
                </div>
            
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
            {error ? errorMessageJsx : null}
        </div>
    );
}
 
export default FormTarea;