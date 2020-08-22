import React, { Fragment } from 'react';
import { ILayout } from '../../common/models/components/ILayout';
import Header from './Header';
import {Global, css} from '@emotion/core'
import Head from 'next/head';

const Layout: React.FC<ILayout> = (props) => {
    
    return ( 
        <Fragment>
            <Global
                styles = {css`
                    :root {
                        --grey1: #3d3d3d;
                        --grey2: #6f6f6f;
                        --grey3: #e1e1e1;
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
                        font-family: "PT Sans", serif;
                    }
                    h1, h2, h3 {
                        margin: 0 0 2rem 0;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-family: "Roboto Slab", serif;
                        font-weight: 700;
                    }
                    h3 {
                        font-family: "PT Sans", serif;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    a {
                        text-decoration: none;
                    }
                    img {
                        max-width: 100%
                    }
                `}
            />

            <Head>
                <html lang="es"/>
                <title>ProductHunt-Firebase-Next.ts</title>
                
                <link rel="stylesheet" 
                    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" 
                    integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" 
                    crossOrigin="anonymous" 
                />

                <link rel="stylesheet" 
                    href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto+Slab:400,700&display=swap"  
                />

                <link
                    rel="stylesheet" 
                    href="/static/css/app.css"
                />
                

            </Head>

            <Header />

            <main>
                {props.children}
            </main>
        
        </Fragment>
    );
}
 
export default Layout;