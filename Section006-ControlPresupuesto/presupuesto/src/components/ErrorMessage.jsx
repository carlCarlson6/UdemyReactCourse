import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({errorState, message}) => {
    const errorMessage = (<p className="alert alert-danger error">{message}</p>);
    let returnMessage = errorState ? errorMessage : null
    return returnMessage;
}

ErrorMessage.propTypes = {
    errorState: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired
}

export default ErrorMessage;