import React from 'react';
import '../styles/Spinner.css';
import PropTypes from 'prop-types';

const Spinner = ({loading}) => {
    
    let spinnerRender = (
        <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
        </div>);
    
    return loading ? spinnerRender : null;
}

Spinner.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Spinner;
