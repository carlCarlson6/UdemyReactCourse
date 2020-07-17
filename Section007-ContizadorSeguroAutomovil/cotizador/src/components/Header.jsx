import React from 'react';
import { ContenedorHeader } from '../styles/ContenedorHeader';
import { TextoHeader } from '../styles/TextoHeader';

const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
    );
}

export default Header;
