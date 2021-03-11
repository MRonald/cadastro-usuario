import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

// Estilizando componente
const FontSite = css`
    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
`;
const GlobalStyle = createGlobalStyle`
    ${FontSite}
    * {
        margin: 0;
        padding: 0;
    }
    html, body {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    body::-webkit-scrollbar {
        display: none;
    }
    body {
        background-color: rgb(242, 242, 242);
        font-family: 'Lato', sans-serif;
        box-sizing: border-box;
    }
`;
const PageDefaultWrapper = styled.div`
    section {
        margin-bottom: 80px;
    }
`;

// Exportando o componente
export default function PageDefault(props) {
    return (
        <PageDefaultWrapper>
            <GlobalStyle/>
            <Menu/>
            <section>
                {props.children}
            </section>
            <Footer/>
        </PageDefaultWrapper>
    );
}