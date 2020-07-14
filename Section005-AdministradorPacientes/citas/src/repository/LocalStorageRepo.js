class LocalStorageRepo {

    GetAppointments() {
        let citas = JSON.parse(localStorage.getItem('citas'));
	    if(!citas) {citas = []}
        return citas;
    }

    UpdateAppointments(citas) {
        if(this.GetAppointments()) {
            localStorage.setItem('citas', JSON.stringify(citas))
        }
        else {
            localStorage.setItem('citas', JSON.stringify([]))
        }
    }

}

export default LocalStorageRepo;