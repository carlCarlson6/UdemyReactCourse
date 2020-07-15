import React from 'react';
import Gasto from './Gasto';

const ListadoGastos = ({gastos}) => {
    
    return (
        <div className="gastos-realizados">
            <h2>Listado gastos</h2>
            {gastos.map(gasto => (<Gasto key={gasto.id} gasto={gasto}/>))}
        </div>
    );
}
 
export default ListadoGastos;