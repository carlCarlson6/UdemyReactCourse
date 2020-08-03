import React, { Fragment, useState, useContext } from 'react';
import ProjectController from '../../controller/ProjectController';
import Project from '../../common/models/Project';
import projectContext from '../../context/projectos/ProjectContext';

const NuevoProyecto = () => {
    const {newProjectForm, projectServices} = useContext(projectContext);

    const [newProject, setNewProject] = useState(new Project());
    const [error, setError] = useState(false);

    const projectController = new ProjectController({setNewProject, setError, projectServices});

    const createNewProjectFormJsx = (
        <form
            className="formulario-nuevo-proyecto"
            onSubmit={event => projectController.Create(newProject, event)}
        >
            <input
                type="text"
                className="input-text"
                placeholder="Nombre Proyecto"
                vale={newProject.name}
                onChange={event => projectController.UpdateNewProjectData(newProject, event)}
                name="name"
            />
            <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Agregar Proyecto"
            />
        </form>
    )
    const messageErrorJsx = <p className="mensaje error">El nombre del projecto es obligatorio</p>

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => projectController.ShowNewProjectForm()}
            >Nuevo proyecto</button>

            {newProjectForm ? createNewProjectFormJsx : null}
            {error ? messageErrorJsx : null}
        </Fragment>
        
    );
}
 
export default NuevoProyecto;