import React, { Fragment } from 'react';
import Link from 'next/link';
import { ButtonLink } from '../styles/ui/ButtonLink';
import { IAdministration } from '../../common/models/IAdministration';
 
const Administration: React.FC<IAdministration> = ({user, firebase}): JSX.Element => {
    return (
        <Fragment>
            { user? (
                <Fragment>

                    <p>Hola: {user.displayName}</p>    
            
                    <ButtonLink 
                        bgColor={true}
                        onClick={()=>firebase.SignOut()}
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