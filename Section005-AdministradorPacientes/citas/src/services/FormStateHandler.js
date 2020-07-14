class FormStateHandler {
    constructor(stateUpdater) {
        this.stateUpdater = stateUpdater
    }

    UpdateState(event, date) {
        console.log(`escribiendo ${event.target.value} en ${event.target.name}`);
        let updatedDate = {...date, [event.target.name]: event.target.value}  
        this.stateUpdater(updatedDate)
    }

}

export default FormStateHandler;