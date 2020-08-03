class FormService {
    constructor(setError){
        this.setError = setError;
    }

    Submit(formData, event) {
        event.preventDefault();

        let validation = this.Validate(formData);
        
        this.setError(!validation);
        
        if(validation) {
            return true;
        }
        else {
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
