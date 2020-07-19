import React from 'react';
import { ErrorMessage } from '../styles/components/ErrorMessage';

const Error = ({message}) => {
    return (
        <ErrorMessage>
            {message}
        </ErrorMessage>
    );
}
 
export default Error;