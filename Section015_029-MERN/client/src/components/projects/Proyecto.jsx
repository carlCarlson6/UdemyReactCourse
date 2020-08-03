import React, { useContext } from 'react';
import projectContext from '../../context/projectos/ProjectContext';
import taskContext from '../../context/tasks/TaskContext';
import ProjectController from '../../controller/ProjectController';

const Proyecto = ({project}) => {
    const {projectServices} = useContext(projectContext);
    const {taskServices} = useContext(taskContext);

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                key={project.id}
                onClick={() => new ProjectController({projectServices, taskServices}).SetProject(project.id)}
            >{project.name}</button>
        </li>
    );
}
 
export default Proyecto;