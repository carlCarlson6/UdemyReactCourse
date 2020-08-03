import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import projectContext from '../../context/projectos/ProjectContext';

const ListadoProyectos = () => {

    const {projects, projectServices} = useContext(projectContext);
    
    useEffect(() => projectServices.GetProjects(), [])

    if(projects.length === 0) return null;

    return (

        <ul className="listado-proyectos">
            {projects.map(project => (
                <Proyecto
                    key={project.id}
                    project={project}
                />
            ))}
        </ul>

    );
}
 
export default ListadoProyectos;