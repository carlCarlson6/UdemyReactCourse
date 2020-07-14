import React, { Fragment, useState } from 'react'
import CitaModel from '../common/models/CitaModel';
import FormStateHandler from '../services/FormStateHandler';
import submitForm from '../services/submitForm';
import PropTypes from 'prop-types';

const Formulario = ({appointmentService}) => {
    
    const [cita, actualizarCita] = useState(new CitaModel('', '', '', '', ''))
    const [error, actualizarError] = useState(false);

    const formStateHandler = new FormStateHandler(actualizarCita);
    
    const {mascota, propietario, hora, fecha, sintomas} = cita;

    const submit = submitForm(cita, actualizarCita, actualizarError, appointmentService)

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submit}
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

Formulario.propTypes = {
    appointmentService: PropTypes.object.isRequired
}
 
export default Formulario;