import user from '../../assets/imgs/user-circle-solid.svg';
import logoFake from '../../assets/imgs/globe-solid.svg';
import bell from '../../assets/imgs/bell-solid.svg';

import React from 'react';
import styled from 'styled-components';

// Estilizando componente
const MenuWrapper = styled.div`
    background-color: rgb(228, 230, 231);
    display: flex;
    justify-content: space-between;
    padding: 10px;
    min-width: 270px;

    nav#navegacao {
        list-style: none;

        ul {
            display: flex;
            align-items: center;
        }

        li {
            display: inline-flex;
            margin: 5px;
            text-transform: uppercase;
            margin: 10px;

            a {
                text-decoration: none;
                color: #4a5968;
                padding: 15px 5px;
                font-size: 0.8rem;
                font-weight: 600;
                transition: color 0.5s;

                &:hover {
                    color: #C93C5A;
                }
            }
        }
    }

    nav#icons {
        list-style: none;
        display: flex;
        align-items: center;

        li {
            display: inline-flex;
            margin: 5px;
            text-transform: uppercase;
            margin: 10px;

            img {
                width: 100%;
                height: 100%;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }

    .circleItem {
        background-color: #b6b8b9;
        border-radius: 100%;
        width: 40px;
        height: 40px;
    }

    input[type=${"checkbox"}] {
        display: none;
    }
    
    input[type=${"checkbox"}]:checked ~ div#menu-lateral {
        display: flex;
    }

    @media (max-width: 720px) {
        nav#navegacao li:nth-child(2),
        nav#navegacao li:nth-child(3) {
            display: none;
        }
        nav#icons li:not(#icone-usuario) {
            display: none;
        }
    }

    div#menu-lateral {
        position: absolute;
        right: 10px;
        top: 90px;
        width: 200px;
        height: 300px;
        padding: 5px;
        display: none;
        flex-direction: column;
        background-color: #ffffff;
        border: 2px solid #b6b8b9;
        border-radius: 5px;

        a {
            color: #4a5968;
            font-size: 0.875rem;
            padding: 5px;
            text-decoration: none;

            &:hover {
                color: #C93C5A;
            }
        }
    }
`;

// Exportando componente
export default function Menu() {
    return (
        <MenuWrapper>
            <nav id="navegacao">
                <ul>
                    <a href="/" id="link-logo-fake"><li className="circleItem"><img src={logoFake} alt="logo fake"/></li></a>
                    <li><a href="/">Explorar</a></li>
                    <li><a href="/">Inscrições</a></li>
                </ul>
            </nav>
            <nav id="icons">
                <li className="circleItem"><img src={bell} alt="sino notificação"/></li>
                <label htmlFor="check">
                    <li className="circleItem" id="icone-usuario"><img src={user} alt="icone usuario"/></li>
                </label>
            </nav>
            <input type="checkbox" id="check"/>
            <div id="menu-lateral">
                <a href="./">Login</a>
                <a href="/cadastro">Cadastro</a>
                <a href="/dadosbasicos">Dados Básicos</a>
                <a href="/localizacao">Localizacao</a>
            </div>
        </MenuWrapper>
    );
}
    