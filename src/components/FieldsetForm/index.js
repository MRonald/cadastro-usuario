import './FieldsetForm.css';
import React from 'react';

export default (props) => (
    <>
    <div className="container-fieldset">
        <div className="instrucoes">
            <h2>{props.tituloInstrucao}</h2>
            <p>{props.instrucao}</p>
        </div>
        <form className="inputs">
            {props.children}
        </form>
    </div>
    </>
);