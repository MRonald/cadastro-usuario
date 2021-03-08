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
            <li className="circleItem"></li>
        </ul>
    </div>
);