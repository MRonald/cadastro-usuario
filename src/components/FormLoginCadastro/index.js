import './FormLoginCadastro.css';
import React from 'react';
import Button from '../Button';

export default function FormLoginCadastro(props) {
    return (
        <form className="form">
            {props.children}
            <Button valueButton={props.valueButton} type="submit"/>
        </form>
    );
}