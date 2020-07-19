class FormService {
    constructor(setRequest, setError){
        this.setRequest = setRequest;
        this.setError = setError;
    }

    Submit(formData, event) {
        event.preventDefault();
        console.log('submitting', formData);

        let validation = this.Validate(formData);
        
        this.setError(!validation);

        if(!validation) {
            console.log('validation failed'); 
            return false;
        }
        else {
            console.log('validation passed');
            this.setRequest(formData);
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
