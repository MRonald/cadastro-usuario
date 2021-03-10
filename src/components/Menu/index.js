import user from '../../assets/imgs/user-circle-solid.svg';
import logoFake from '../../assets/imgs/globe-solid.svg';
import bell from '../../assets/imgs/bell-solid.svg';

import React from 'react';
import './Menu.css';

export default () => (
    <div className="menu">
        <nav className="navegacao">
            <ul className="lista-navegacao">
                <a href="/" id="link-logo-fake"><li className="circleItem"><img src={logoFake}/></li></a>
                <li><a href="#">Explorar</a></li>
                <li><a href="#">Inscrições</a></li>
            </ul>
        </nav>
        <ul className="icons">
            <li className="circleItem"><img src={bell}/></li>
            <label for="check">
                <li className="circleItem" id="icone-usuario"><img src={user}/></li>
            </label>
        </ul>
        <input type="checkbox" id="check"/>
        <div className="menu-lateral" id="menu-lateral">
            <a href="/">Login</a>
            <a href="/cadastro">Cadastro</a>
            <a href="/dadosbasicos">Dados Básicos</a>
            <a href="/localizacao">Localizacao</a>
        </div>
    </div>
);

    