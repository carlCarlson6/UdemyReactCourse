import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import AppointmentService from './services/AppointmentService';
import Cita from './components/Cita';
import LocalStorageRepo from './repository/LocalStorageRepo';


function App() {
	
	const localStorageRepo = new LocalStorageRepo();
	
	const [citas, setCitas] = useState(localStorageRepo.GetAppointments());
	const appointmentService = new AppointmentService(citas, setCitas);

	const tituloListadoCitas = citas.length===0 ? 'Agregue una cita' : 'Administra tus citas';

	// use effect para realizar ciertas operaciones cuando el state cambia
	useEffect(() => {localStorageRepo.UpdateAppointments(citas);}, [citas, localStorageRepo]);

	return(
    	<Fragment>
    	  	<h1>Administrador de Pacientes</h1>
		
    		<div className="container">
    		  	<div className="row">
    		  	  	<div className="one-half column">
						<Formulario 
							appointmentService={appointmentService}
						/>
    		  	  	</div>
					<div className="one-half column">
						<h2>{tituloListadoCitas}</h2>
						{citas.map(cita => (
							<Cita 
								key={cita.id}
								cita={cita}
								appointmentService={appointmentService}
							/>
						))}
					</div>
    		  	</div>
    		</div>
		</Fragment>
	);	
}

export default App;
