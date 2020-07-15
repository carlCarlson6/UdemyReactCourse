class LocalStorageRepo {
    
    constructor(dataTag, defaultValue){
        this.dataTag = dataTag;
        this.defaultValue = defaultValue;
    }

    GetData(){
        let data = JSON.parse(localStorage.getItem(this.dataTag));
	    if(!data) {data = this.defaultValue}
        return data;
    }

    UpdateData(data){
        if(this.GetData()) {
            localStorage.setItem(this.dataTag, JSON.stringify(data))
        }
        else {
            localStorage.setItem(this.dataTag, JSON.stringify(this.defaultValue))
        }
    }

}

export default LocalStorageRepo;