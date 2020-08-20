import React from 'react';
import Search from '../ui/Search';
import Navigation from './Navigation';
import Administration from './Administration';
 
const Header: React.FC = (): JSX.Element => {
    return (
        <header>
            <div>

                <div>
                    <p>P</p>
                    <Search />
                    <Navigation />
                </div>

                <div>
                    <Administration />
                </div>
            
            </div>
        </header>
    );
}
 
export default Header;