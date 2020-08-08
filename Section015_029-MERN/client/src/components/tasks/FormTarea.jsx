import React, {useContext, useState, useEffect} from 'react';
import projectContext from '../../context/projectos/ProjectContext';
import taskContext from '../../context/tasks/TaskContext';
import TaskController from '../../controller/TaskController';
import Task from '../../common/models/Task';

const FormTarea = () => {
    const {project} = useContext(projectContext);
    const {selectedTask, taskServices} = useContext(taskContext);

    const [newTask, setNewTask] = useState(new Task('', ''));
    const [error, setError] = useState(false);

    const taskController = new TaskController({taskServices, setTask: setNewTask, setError});

    useEffect(() => selectedTask? setNewTask(selectedTask) : setNewTask(new Task('','')), [selectedTask]);

    if(!project) return null;
    return (
        <div className="formulario">
            <form
                onSubmit={async event => {
                    selectedTask ? 
                        taskController.EditTask(newTask, project, event) : 
                        await taskController.CreateTask(newTask, project, event)
                }}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la Tarea..."
                        name="name"
                        value={newTask.name}
                        onChange={event => taskController.UpdateNewTaskData(newTask, event)}
                    />
                </div>
            
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={selectedTask? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>
            {error ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
    );
}
 
export default FormTarea;