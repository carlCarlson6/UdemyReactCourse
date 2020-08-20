import React, { Fragment } from 'react';
import Link from 'next/link';
 
const Administration: React.FC = (): JSX.Element => {
    return (
        <Fragment>
        
            <p>Hola: usuario</p>
            
            <button 
                type="button"
            >Cerrar Sesión</button>
            
            <Link href="/"><a>Iniciar Sesion</a></Link>
            
            <Link href="/"><a>Nueva Cuenta</a></Link>
        
        </Fragment>
    );
}
 
export default Administration;