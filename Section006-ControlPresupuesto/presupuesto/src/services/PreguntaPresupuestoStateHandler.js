class PreguntaPresupuestoStateHandler {
    constructor(stateUpdater){
        this.stateUpdater = stateUpdater;
    }

    UpdateAmount(event) {
        let newAmount = parseInt(event.target.value); 
        console.log(`updating ${event.target.name} -> ${newAmount}`);
        this.stateUpdater(newAmount);
    }

}

export default PreguntaPresupuestoStateHandler;