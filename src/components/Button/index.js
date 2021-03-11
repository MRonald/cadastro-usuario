import React from 'react';
import styled from 'styled-components';

// Estilizando componente
const ButtonWrapper = styled.div`
    width: 100%;
    text-align: center;
    margin: 0.5rem auto;
    min-width: 270px;

    input {
        background-color: rgb(201, 59, 89);
        color: white;
        margin-top: 0.7%;
        padding: 0.7rem 2rem;
        font-size: 1.1rem;
        border: none;
        border-radius: 10px;

        &:hover {
            cursor: pointer;
        }
    }
`;

// Exportando componente
export default (props) => (
    <ButtonWrapper style={{textAlign: props.align || 'center'}}>
        <input type={props.type} value={props.valueButton || 'Enviar'} style={{backgroundColor: props.color || 'rgb(201, 59, 89)'}}/>
    </ButtonWrapper>
);