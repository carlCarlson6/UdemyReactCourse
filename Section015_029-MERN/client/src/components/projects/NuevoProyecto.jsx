import React, { Fragment, useState } from 'react';
import ProjectController from '../../controller/ProjectController';
import Project from '../../common/models/Project';

const NuevoProyecto = () => {

    const [newProject, setNewProject] = useState(new Project(''));
    const [error, setError] = useState(false);

    const projectController = new ProjectController(setNewProject, setError);

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo proyecto</button>

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

        </Fragment>
        
    );
}
 
export default NuevoProyecto;