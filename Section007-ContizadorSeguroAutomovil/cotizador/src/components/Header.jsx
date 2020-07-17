import React from 'react';
import { ContenedorHeader } from '../styles/ContenedorHeader';
import { TextoHeader } from '../styles/TextoHeader';
import PropTypes from 'prop-types';

const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
    );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;
