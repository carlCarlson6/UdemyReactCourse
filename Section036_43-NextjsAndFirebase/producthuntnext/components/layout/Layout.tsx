import React, { Fragment } from 'react';
import { ILayout } from '../../models/interfaces/ILayout';
import Header from './Header';
import {Global, css} from '@emotion/core'

const Layout: React.FC<ILayout> = (props): JSX.Element => {
    
    return ( 
        <Fragment>
            <Global
                styles = {css`
                    :root {
                        --grey1: #3d3d3d;
                        --grey2: #6f6f6f;
                        --orange: #DA552F;
                    }

                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }

                    *, *:before, *:after {
                        box-sizing: inherit;
                    }

                    body {
                        font-size: 1.6rem;
                        line-height: 1.5;
                    }
                `}
            />

            <Header />

            <main>
                {props.children}
            </main>
        
        </Fragment>
    );
}
 
export default Layout;