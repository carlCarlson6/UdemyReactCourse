class GastoStateHandler {
    constructor(stateUpdater) {
        this.stateUpdater = stateUpdater
    }

    UpdateState(event, gasto) {
        let name = event.target.name;
        let value = event.target.value;
        
        console.log(`escribiendo ${name} en ${value}`);
        
        if (event.target.type === "number"){ value = parseInt(value); } 

        let updatedDate = {...gasto, [name]: value}  
        this.stateUpdater(updatedDate)
    }

}

export default GastoStateHandler;