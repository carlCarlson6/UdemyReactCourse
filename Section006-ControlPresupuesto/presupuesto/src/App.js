import React, {useState} from 'react';
import PreguntaPresupuesto from './components/PreguntaPresupuesto';
import PresupuestoModel from './common/models/PresupuestoModel';
import FormularioGastos from './components/FormularioGastos';

function App() {

	const [presupuesto, setPresupuesto] = useState(new PresupuestoModel(0, 0));
	const [showPregunta, setShowPregunta] = useState(true);
	const [gastos, setGastos] = useState([]);

	return(
		<div className="container">
			<header>
				<h1>Gasto Semanal</h1>
				
				<div className="contenido-principal contenido">
					
					{ showPregunta ? (
						<PreguntaPresupuesto 
							presupuestoSetter={setPresupuesto} 
							setShowPregunta={setShowPregunta}
						/>
					
						) : (
					
						<div className="row">
							<div className="one-half column">
								<FormularioGastos 
									gastos={gastos} 
									gastosSetter={setGastos}
								/>
							</div>
							
							<div className="one-half column">
								2
							</div>
						</div>)
					}

				</div>

			</header>
		</div>
  	);
}

export default App;
