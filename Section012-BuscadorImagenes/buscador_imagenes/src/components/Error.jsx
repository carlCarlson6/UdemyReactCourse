import React from 'react';

const Error = ({message}) => {
    return (
        <p className="my-3 p-4 text-center text-white alert alert-primary">
            {message}
        </p>
    );
}
 
export default Error;