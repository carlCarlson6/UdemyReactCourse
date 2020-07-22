import React from 'react';
import PropTypes from 'prop-types';

const Header = ({message}) => {
    return (
        <header className="bg-alert">
            <h1>{message}</h1>
        </header>
    );
}
 
Header.propTypes = {
    message: PropTypes.string.isRequired
}

export default Header;