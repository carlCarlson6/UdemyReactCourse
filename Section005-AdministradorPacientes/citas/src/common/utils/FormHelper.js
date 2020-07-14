class FormHelper {

    ValidateForm(cita) {
        let validation = true;
        
        Object.keys(cita).forEach(key => {
            if(cita[key].trim() === ''){
                console.log('hay un error en', key);
                validation = validation*false;
            }
            else {
                console.log('ningun error en', key);
            }
        });
        
        return validation;
    }

}

export default FormHelper;