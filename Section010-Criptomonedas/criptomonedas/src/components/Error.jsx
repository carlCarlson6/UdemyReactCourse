import React from 'react';
import { ErrorMessage } from '../styles/components/ErrorMessage';
import PropTypes from 'prop-types';

const Error = ({message}) => {
    return (
        <ErrorMessage>
            {message}
        </ErrorMessage>
    );
}

Error.propTypes = {
    message: PropTypes.string.isRequired
}
 
export default Error;