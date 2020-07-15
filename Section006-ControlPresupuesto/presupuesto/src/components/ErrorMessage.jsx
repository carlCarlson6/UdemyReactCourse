import React from 'react';

const ErrorMessage = ({errorState, message}) => {

    const errorMessage = (<p className="alert alert-danger error">{message}</p>);
    let returnMessage = errorState ? errorMessage : null
    
    return returnMessage;
}
 
export default ErrorMessage;