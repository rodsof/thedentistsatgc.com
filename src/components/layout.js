import React from 'react';
import Helmet from 'react-helmet';
import Header from './header';
import { Global, css } from '@emotion/react';
import GlobalStyle from '../css/global.css.js';
import "../css/global.css";
import Footer from './footer';
import Book from './book';
import Contact from './contact';

const Layout = ({ children }) => {
    return (
        <>
            <Global
                styles={css`
                html {
                    box-sizing: border-box;
                    display: block;
                    line-height: 1.15;
                    -webkit-text-size-adjust: 100%;
                }
                *, *:before, *:after {
                    box-sizing: border-box;
                                }
                body {
                    margin: 0;
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.5;
                    color: #333;
                    background-color: #fff;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    font-family: "Montserrat", Sans-serif;

                }
                
                `}
            />
            <GlobalStyle />

            <Helmet>
                <title>The Dentists</title>
                <meta name="description" content="preguntar" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />
                <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CPoppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRaleway%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&ver=5.6&display=swap" rel="stylesheet"></link>
            </Helmet>

            <Header />

            {children}

            <Footer />
        </>
    );
}

export default Layout;