import React from 'react';
import { Link } from 'react-router-dom';
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
            <li className="circleItem" id="icone-usuario"></li>
        </ul>
        <div className="menu-lateral" id="menu-lateral">
            <div className="icone-fechar" id="icone-fechar">X</div>
            <Link>Login</Link>
            <Link>Cadastro</Link>
            <Link to="/dadosbasicos">Dados Básicos</Link>
            <Link to="/localizacao">Localizacao</Link>
        </div>
    </div>
);

    