import React from 'react';

function Header({titulo}) {
    let headerMessage = titulo;
    let jsxReturn = (<h1 id="encabezado" className="encabezado">{headerMessage}</h1>);
    return jsxReturn;
}

function checkEdad(edad) {
    let mensaje;
    
    if (edad >= 18) {
        mensaje = 'eres mayor de edad';
    } else {
        mensaje = 'eres menor de edad';
    }
    
    return mensaje 
}

export default Header;