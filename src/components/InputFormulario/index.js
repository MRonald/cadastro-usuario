import React from 'react';
import styled from 'styled-components';

// Estilizando componente
const InputFormularioWrapper = styled.div`
    display: flex;
    flex-direction: column;

    label {
        margin: 2% 0;
    }

    label#label-foto {
        width: 140px;
    }

    input:not(input[type="button"]),
    select {
        width: 92%;
        font-size: 1rem;
        padding: 0.7rem 3.2%;
        border-radius: 3px;
        border: 2px solid rgb(206, 212, 218);
    }
    
    select {
        width: 99.1%;
        color: gray;
        

        option:not(option:first-child) {
            color: black;
            margin: 40px;
        }
    }

    .required::after {
        content: '*';
        color: rgb(201, 59, 89);
        margin-left: 0.20rem;
    }
`;

// Exportando componente
export default function InputFormulario(props) {
    return (
        <InputFormularioWrapper>
            {props.children}
        </InputFormularioWrapper>
    );
}