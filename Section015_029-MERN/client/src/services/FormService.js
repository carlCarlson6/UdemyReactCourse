class FormService {
    constructor(setError){
        this.setError = setError;
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
