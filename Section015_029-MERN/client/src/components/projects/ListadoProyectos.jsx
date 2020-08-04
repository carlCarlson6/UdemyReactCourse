import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import projectContext from '../../context/projectos/ProjectContext';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const ListadoProyectos = () => {

    const {projects, projectServices} = useContext(projectContext);
    
    useEffect(() => projectServices.GetProjects(), [])

    if(projects.length === 0) return <p>No hay proyectos</p>;

    return (

        <ul className="listado-proyectos">
            <TransitionGroup>
            {projects.map(project => (
                <CSSTransition
                    key={project.id}
                    classNames="proyecto"
                    timeout={200}
                >
                    <Proyecto project={project}/>
                </CSSTransition>    
                
            ))}
            </TransitionGroup>
        </ul>

    );
}
 
export default ListadoProyectos;