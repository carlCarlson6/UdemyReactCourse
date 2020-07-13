import React, { Fragment, useState } from 'react'
import CitaModel from '../common/models/CitaModel';
import FormStateHandler from '../services/FormStateHandler'

const Formulario = () => {
    
    const [cita, actualizarCita] = useState(new CitaModel('', '', '', '', ''))
    const formStateHandler = new FormStateHandler(actualizarCita);

    const {mascota, propietario, hora, fecha, sintomas} = cita;

    const submitCita = (event) => {
        event.preventDefault();
        console.log('enviando formulario')

        // validar datos

        // asignar id

        // crear cita en el state principal

        // reiniciar form
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-witdh"
                    placeholder="Nombre Mascota"
                    onChange={(event)=>formStateHandler.UpdateState(event, cita)}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-witdh"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={(event)=>formStateHandler.UpdateState(event, cita)}
                    value={propietario}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-witdh"
                    onChange={(event)=>formStateHandler.UpdateState(event, cita)}
                    value={fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-witdh"
                    onChange={(event)=>formStateHandler.UpdateState(event, cita)}
                    value={hora}
                />

                <label>Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-witdh"
                    placeholder="Describa los sintomas"
                    onChange={(event)=>formStateHandler.UpdateState(event, cita)}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-witdh button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );

}
 
export default Formulario;