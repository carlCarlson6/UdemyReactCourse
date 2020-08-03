class StateUpdater {
    constructor(stateSetter) {
        this.stateSetter = stateSetter;
    }

    UpdataObjectStateData(data, name, value) {
        this.stateSetter({...data, [name]: value})
    }

    UpdataObjectStateDataByEvent(data, event) {
        let name = event.target.name;
        let value = event.target.value;
        
        this.UpdataObjectStateData(data, name, value)
    }

    UpdateState(newState) {
        this.stateSetter(newState);
    }
}

export default StateUpdater;