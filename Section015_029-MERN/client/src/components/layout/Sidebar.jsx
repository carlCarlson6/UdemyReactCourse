import React from 'react';
import NuevoProyecto from '../projects/NuevoProyecto';
import ListadoProyectos from '../projects/ListadoProyectos';

const Sidebar = () => {
    return (
        <aside>
            <h1>MEARN<span>Tasks</span></h1>
            
            <NuevoProyecto />

            <div className="proyectos">
                <h2>Tus Proyectos</h2>

                <ListadoProyectos />
                
            </div>

        </aside>
    );
}
 
export default Sidebar;