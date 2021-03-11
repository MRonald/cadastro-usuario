import React from 'react';
import styled from 'styled-components';

// Estilizando componente
const FieldsetFormWrapper = styled.fieldset`
    background-color: #ffffff;
    width: 80%;
    min-width: 250px;
    margin: 0.5rem auto;
    padding: 1.2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    border: none;

    &:first-child {
        margin-top: 4rem;
    }

    div#instrucoes {
        width: 47%;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    form {
        width: 48.8%;
    }
    
    div#instrucoes,
    form {
        min-width: 200px;
    }

    @media (max-width: 800px) {
        & {
            width: 90%;
        }
    }

    @media (max-width: 468px) {
        div#instrucoes, form {
            width: 100%;
        }
        div#instrucoes {
            margin: 15px auto;
        }
    }
`;

// Exportando componente
export default (props) => (
    <FieldsetFormWrapper>
        <div id="instrucoes">
            <h2>{props.tituloInstrucao}</h2>
            <p>{props.instrucao}</p>
        </div>
        <form>
            {props.children}
        </form>
    </FieldsetFormWrapper>
);