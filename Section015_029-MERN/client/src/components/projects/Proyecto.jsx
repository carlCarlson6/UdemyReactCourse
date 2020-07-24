import React from 'react';

const Proyecto = ({project}) => {
    

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                key={project.id}
            >{project.name}</button>
        </li>
    );
}
 
export default Proyecto;