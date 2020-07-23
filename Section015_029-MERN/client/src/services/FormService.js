class FormService {
    constructor(setForm, setError){
        this.setForm = setForm
        this.setError = setError;
    }

    Update(formData, event) {
        let name = event.target.name;
        let value = event.target.value;
        console.log(`escribiendo ${value} en ${name}`);

        this.setForm({...formData, [name]: value})
    }

    Submit(formData, event) {
        event.preventDefault();
        console.log('submitting', formData);

        let validation = this.Validate(formData);
        
        this.setError(!validation);
        
        if(validation) {
            console.log('validation passed');
            return true;
        }
        else {
            console.log('validation failed');
            return false;
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