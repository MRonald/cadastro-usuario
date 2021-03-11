import React from 'react';
import Button from '../Button';
import styled from 'styled-components';

// Estilizando componente
const FormLoginCadastroWrapper = styled.form`
    min-width: 270px;
    width: 40%;
    margin: 5rem auto;
    padding: 10px;
    background-color: white;
    line-height: 40px;

    input[type=${"submit"}] {
        margin-top: 20px;
    }
`;

// Exportando componente
export default function FormLoginCadastro(props) {
    return (
        <FormLoginCadastroWrapper>
            {props.children}
            <Button valueButton={props.valueButton} type="submit"/>
        </FormLoginCadastroWrapper>
    );
}