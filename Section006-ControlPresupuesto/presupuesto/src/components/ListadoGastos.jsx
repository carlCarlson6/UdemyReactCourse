import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const ListadoGastos = ({gastos}) => {
    
    return (
        <div className="gastos-realizados">
            <h2>Listado gastos</h2>
            {gastos.map(gasto => (<Gasto key={gasto.id} gasto={gasto}/>))}
        </div>
    );
}

ListadoGastos.propTypes = {
    gastos: PropTypes.array.isRequired
}

export default ListadoGastos;