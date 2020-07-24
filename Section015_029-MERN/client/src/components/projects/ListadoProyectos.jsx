import React from 'react';
import Proyecto from './Proyecto';
import Project from '../../common/models/Project';

const ListadoProyectos = () => {

    const proyects = [new Project('proyecto 1'), new Project('proyecto 2'), new Project('proyecto 3')]

    return (

        <ul className="listado-proyectos">
            {proyects.map(project => (
                <Proyecto
                    project={project}
                />
            ))}
        </ul>

    );
}
 
export default ListadoProyectos;