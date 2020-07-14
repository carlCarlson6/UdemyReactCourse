class AppointmentService {
    constructor(appointments, appointmentSetter){
        this.appointments = appointments;
        this.appointmentSetter = appointmentSetter;
    }

    AddAppointment(appointment) {
        console.log('añadiendo cita');
        console.log(appointment);
        this.appointmentSetter([...this.appointments, appointment]);
    }

    DeleteAppointment(appointment) {
        console.log('eliminando cita');
        console.log(appointment);
        const newApointments = this.appointments.filter(appointmentElement => appointmentElement.id !== appointment.id);
        this.appointmentSetter(newApointments);
    }

}

export default AppointmentService