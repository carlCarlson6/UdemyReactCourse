import React, { useContext } from 'react';
import projectContext from '../../context/projectos/ProjectContext';

const Proyecto = ({project}) => {
    const {projectServices} = useContext(projectContext);

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                key={project.id}
                onClick={() => projectServices.SetProject(project.id)}
            >{project.name}</button>
        </li>
    );
}
 
export default Proyecto;