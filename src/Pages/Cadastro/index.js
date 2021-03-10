import './Cadastro.css';
import React from 'react';
import FormLoginCadastro from '../../components/FormLoginCadastro';
import InputFormulario from '../../components/InputFormulario';
import PageDefault from '../../components/PageDefault';

export default function Cadastro(props) {
    return (
        <PageDefault>
            <FormLoginCadastro valueButton="Cadastrar">
                <InputFormulario>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" placeholder="Digite seu nome" required/>
                    <label for="nome">Email:</label>
                    <input type="text" id="nome" placeholder="email@exemplo.com" required/>
                    <label for="nome">Crie uma senha:</label>
                    <input type="password" id="nome" placeholder="Digite sua senha" required/>
                    <label for="nome">Confirme a senha:</label>
                    <input type="password" id="nome" placeholder="Repita a senha" required/>
                </InputFormulario>
            </FormLoginCadastro>
        </PageDefault>
    );
}