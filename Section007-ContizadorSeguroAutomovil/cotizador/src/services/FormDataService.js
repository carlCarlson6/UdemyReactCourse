class FormDataService {
    constructor(setFormData){
        this.setFormData = setFormData;
    }

    Update(formData, event){
        let name = event.target.name;
        let value = event.target.value;
        console.log(`escribiendo ${value} en ${name}`);

        this.setFormData({...formData, [name]: value})
    }

    Submit(){

    }

    Validate(){

    }
}

export default FormDataService;