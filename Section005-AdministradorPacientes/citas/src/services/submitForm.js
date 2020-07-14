import uuid from 'uuid/dist/v4';
import CitaModel from '../common/models/CitaModel';
import FormHelper from '../common/utils/FormHelper';

function submitForm(cita, actualizarCita, actualizarError, appointmentService) {
    return (event) => {
        event.preventDefault();
        console.log('enviando formulario');

        console.log('validando formulario');
        let formValidation = new FormHelper().ValidateForm(cita);
        actualizarError(!formValidation);
        if (!formValidation) { return null; }

        console.log('añadiendo Id a la cita');
        cita.id = uuid();

        // crear cita en el state principal
        appointmentService.AddAppointment(cita);

        //reiniciar el form
        actualizarCita(new CitaModel('', '', '', '', ''));
    };
}

export default submitForm;