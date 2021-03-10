import search from '../../assets/imgs/search-solid.svg';
import suitcase from '../../assets/imgs/suitcase-solid.svg';
import bell from '../../assets/imgs/bell-solid.svg';

import './Footer.css';
import React from 'react';

export default function Footer() {
    return (
        <div className="footer">
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
        </div>
    );
}