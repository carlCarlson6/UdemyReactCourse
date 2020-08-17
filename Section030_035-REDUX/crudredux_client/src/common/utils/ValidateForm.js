export const validateFormNoEmptyFields = (formData) => {
    let validation = true;
    
    Object.keys(formData).forEach(key => {
        if(typeof formData[key] === 'string' || formData[key] instanceof String) {
            if(formData[key].trim() === '') { 
                validation=validation*false; 
            }
        }
        if(typeof formData[key] === 'number' || formData[key] instanceof Number) {
            if(formData[key] <= 0) {
                validation=validation*false;
            }
        }
    })
    
    return validation;
}