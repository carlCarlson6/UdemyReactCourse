import React, {useContext} from 'react';
import projectContext from '../../context/projectos/ProjectContext';

const FormTarea = () => {
    const {project} = useContext(projectContext);

    if(!project) return null;

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la Tarea..."
                        name="name"
                    />
                </div>
            
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
    );
}
 
export default FormTarea;