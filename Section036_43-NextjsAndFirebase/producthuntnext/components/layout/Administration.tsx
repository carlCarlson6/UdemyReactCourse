import React, { Fragment } from 'react';
import Link from 'next/link';
import { ButtonLink } from '../styles/layout/ButtonLink';
import { IAdministration } from '../../models/interfaces/IAdministration';
 
const Administration: React.FC<IAdministration> = ({user}): JSX.Element => {
    return (
        <Fragment>
            { user? (
                <Fragment>

                    <p>Hola: usuario</p>    
            
                    <ButtonLink bgColor={true}
                    >Cerrar Sesión</ButtonLink>

                </Fragment>       
            ) : (
                <Fragment>

                    <Link href="/login"><ButtonLink bgColor={true}>
                        Iniciar Sesion
                    </ButtonLink></Link>
            
                    <Link href="/crear-cuenta"><ButtonLink>
                        Nueva Cuenta
                    </ButtonLink></Link>
                    
                </Fragment>
            ) }
        </Fragment>
    );
}
 
export default Administration;