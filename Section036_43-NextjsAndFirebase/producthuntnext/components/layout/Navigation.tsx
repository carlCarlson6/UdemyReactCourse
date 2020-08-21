import React from 'react';
import Link from 'next/link';
import { Nav } from '../styles/layout/NavigationStyles';

const Navigation: React.FC = () => {
    return (    
        <Nav>

            <Link 
                href="/"
            ><a>Inicio</a></Link>
        
            <Link 
                href="/populares"
            ><a>Populares</a></Link>
        
            <Link 
                href="/nuevo-producto"
            ><a>Nuevo Producto</a></Link>
        

        </Nav>
    );
}
 
export default Navigation;