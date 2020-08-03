class StateUpdater {
    constructor(stateSetter) {
        this.stateSetter = stateSetter;
    }

    UpdateObjectStateData(data, name, value) {
        this.stateSetter({...data, [name]: value})
    }

    UpdateObjectStateDataByEvent(data, event) {
        let name = event.target.name;
        let value = event.target.value;
        
        this.UpdateObjectStateData(data, name, value)
    }

    UpdateState(newState) {
        this.stateSetter(newState);
    }
}

export default StateUpdater;