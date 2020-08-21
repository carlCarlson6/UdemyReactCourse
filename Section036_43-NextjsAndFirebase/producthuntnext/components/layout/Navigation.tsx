import React from 'react';
import Link from 'next/link';
import { Nav } from '../styles/layout/NavigationStyles';
import { INavigation } from '../../common/models/INavigation';

const Navigation: React.FC<INavigation> = ({user}) => {
    return (    
        <Nav>

            <Link 
                href="/"
            ><a>Inicio</a></Link>
        
            <Link 
                href="/populares"
            ><a>Populares</a></Link>
        
            {user && (
                <Link 
                    href="/nuevo-producto"
                ><a>Nuevo Producto</a></Link>
            )}
            
        

        </Nav>
    );
}
 
export default Navigation;