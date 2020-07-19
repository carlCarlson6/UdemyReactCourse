class FormService {
    constructor(setFormData, setError){
        this.setFormData = setFormData;
        this.setError = setError;
    }

    UpdateData(formData, event){
        let name = event.target.name;
        let value = event.target.value;
        console.log(`escribiendo ${value} en ${name}`);

        this.setFormData({...formData, [name]: value})
    }

    Submit(formData, event) {
        event.preventDefault();
        console.log('submitting', formData);

        console.log('validating');
        let validation = this.Validate(formData);
        
        this.setError(!validation);

        if(!validation) {
            console.log('validation failed'); 
            return false;
        }
        else {
            console.log('validation passed');
            return true;
        }
    }

    Validate(formData){
        let validation = true;
        
        Object.keys(formData).forEach(key => {
            if(formData[key].trim() === ''){validation=validation*false;}
        })
        
        return validation;
    }
}

export default FormService;
