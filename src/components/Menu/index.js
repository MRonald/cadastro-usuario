import React from 'react';
import './Menu.css';
import './Menu';

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
            <li className="circleItem" id="icone-usuario"></li>
        </ul>
        <div className="menu-lateral" id="menu-lateral">
            <div className="icone-fechar" id="icone-fechar">X</div>
            <a>Login</a>
            <a>Cadastro</a>
            <a href="/dadosbasicos">Dados Básicos</a>
            <a href="/localizacao">Localizacao</a>
        </div>
    </div>
);

    