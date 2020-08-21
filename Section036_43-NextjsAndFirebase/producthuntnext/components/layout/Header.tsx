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
 
const Header: React.FC = (): JSX.Element => {
    const user:boolean = false;

    return (
        <HeaderStyled>
            <HeaderContainer>

                <HeaderControlContainer>
                    <Link href="/">
                        <a><Logo>P</Logo></a>
                    </Link>
        
                    <Search />
                    <Navigation />
                </HeaderControlContainer>

                <AdministrationContainer>
                    <Administration  user={user}/>
                </AdministrationContainer>
            
            </HeaderContainer>
        </HeaderStyled>
    );
}
 
export default Header;