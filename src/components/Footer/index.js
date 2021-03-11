import search from '../../assets/imgs/search-solid.svg';
import suitcase from '../../assets/imgs/suitcase-solid.svg';
import bell from '../../assets/imgs/bell-solid.svg';

import React from 'react';
import styled from 'styled-components';

// Estilização dos componentes
const FooterWrapper = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    min-width: 290px;
    padding: 10px 0px;
    background-color: #E4E6E7;
    display: none;

    ul {
        width: 100%;
        list-style: none;
        display: inline-flex;
        justify-content: space-around;

        li {
            text-transform: lowercase;
            font-size: 0.8rem;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: center;
            min-width: 70px;

            img {
                width: 18px;
            }
        }
    }
    @media (max-width: 720px) {
    & {
        display: flex;
    }
}
`;

// Exportando componente
export default function Footer() {
    return (
        <FooterWrapper>
            <ul className="lista-icones">
                <li>
                    <img src={search}/>
                    <span>Explorar</span>
                </li>
                <li>
                    <img src={suitcase}/>
                    <span>Inscrições</span>
                </li>
                <li>
                    <img src={bell}/>
                    <span>Notificações</span>
                </li>
            </ul>
        </FooterWrapper>
    );
}