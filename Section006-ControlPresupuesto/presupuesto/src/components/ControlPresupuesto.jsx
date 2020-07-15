import React, {Fragment} from 'react';
import {revisarPresupuesto} from '../common/helpers';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({presupuesto}) => {
    const {total, restante} = presupuesto;

    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuestado: $ {total}
            </div>
            <div className={revisarPresupuesto(total, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
    );
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.object.isRequired
}

export default ControlPresupuesto;