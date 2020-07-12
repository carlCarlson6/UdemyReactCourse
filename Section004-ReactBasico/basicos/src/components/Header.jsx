import React from 'react';


function Header({titulo}) {
    let headerMessage = titulo;
    let jsxReturn = (<h1 id="encabezado" className="encabezado">{headerMessage}</h1>);
    return jsxReturn;
}

export default Header;