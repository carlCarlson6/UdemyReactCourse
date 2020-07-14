import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, appointmentService}) => (
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>

        <button
            className="button eleminar u-full-width"
            onClick={()=>appointmentService.DeleteAppointment(cita)}
        >Eliminar &times;</button>
    </div>
)

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    appointmentService: PropTypes.object.isRequired
}

export default Cita;