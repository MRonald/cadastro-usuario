import './Formulario.css';
import React from 'react';

export default (props) => (
    <>
    <div className="container-form">
        <div className="instrucoes">
            <h2>{props.tituloInstrucao}</h2>
            <p>{props.instrucao}</p>
        </div>
        <form className="form">
            {props.children}
        </form>
    </div>
    <div className="container-button">
        <input type="submit" value={props.nameButton}/>
    </div>
    </>
);