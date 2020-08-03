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
            if(typeof formData[key] === 'string' || formData[key] instanceof String){
                if(formData[key].trim() === ''){ 
                    validation=validation*false; 
                }
            }
        })
        
        return validation;
    }
}

export default FormService;
