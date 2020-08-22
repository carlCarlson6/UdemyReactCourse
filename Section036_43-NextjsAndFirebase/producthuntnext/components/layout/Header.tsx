import React from 'react';
import Search from '../ui/Search';
import Navigation from './Navigation';
import Administration from './Administration';
import { HeaderContainer } from '../styles/layout/HeaderStyles';
import { Logo } from '../styles/layout/Logo';
import Link from 'next/link';
import { HeaderStyled } from '../styles/layout/HeaderStyles';
import { AdministrationContainer } from '../styles/layout/AdministrationContainer';
import { HeaderControlContainer } from '../styles/layout/HeaderStyles';
import {FireBaseContext} from '../../database/firebase' 

const Header: React.FC = (): JSX.Element => {
    const {user, firebase} = React.useContext(FireBaseContext);

    return (
        <HeaderStyled>
            <HeaderContainer>

                <HeaderControlContainer>
                    <Link href="/">
                        <a><Logo>P</Logo></a>
                    </Link>
        
                    <Search />
                    <Navigation user={user}/>
                </HeaderControlContainer>

                <AdministrationContainer>
                    <Administration  user={user} firebase={firebase}/>
                </AdministrationContainer>
            
            </HeaderContainer>
        </HeaderStyled>
    );
}
 
export default Header;