import React from 'react';
import { ErrorTitle } from '../styles/layout/404Styles';

 
const Error404: React.FC<{message:string}> = ({message}) => {
    return ( 
        <ErrorTitle>
            404 - {message}
        </ErrorTitle>
     );
}
 
export default Error404;