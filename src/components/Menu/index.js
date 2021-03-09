import React from 'react';
import './Menu.css';

export default () => (
    <div className="menu">
        <nav className="navegacao">
            <ul className="lista-navegacao">
                <li className="circleItem"></li>
                <li>Explorar</li>
                <li>Inscrições</li>
            </ul>
        </nav>
        <ul className="icons">
            <li className="circleItem"></li>
            <label for="check">
                <li className="circleItem" id="icone-usuario"></li>
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

    