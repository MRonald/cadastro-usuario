import React from 'react';
import FormLoginCadastro from '../../components/FormLoginCadastro';
import InputFormulario from '../../components/InputFormulario';
import PageDefault from '../../components/PageDefault';

export default function Cadastro(props) {
    return (
        <PageDefault>
            <FormLoginCadastro valueButton="Cadastrar">
                <InputFormulario>
                    <label htmlFor="nome" className="required">Nome</label>
                    <input type="text" id="nome" placeholder="Digite seu nome" required/>
                    <label htmlFor="email" className="required">Email</label>
                    <input type="text" id="email" placeholder="email@exemplo.com" required/>
                    <label htmlFor="senha" className="required">Crie uma senha</label>
                    <input type="password" id="senha" placeholder="Digite sua senha" required/>
                    <label htmlFor="senha-repet" className="required">Confirme a senha</label>
                    <input type="password" id="senha-repet" placeholder="Repita a senha" required/>
                </InputFormulario>
            </FormLoginCadastro>
        </PageDefault>
    );
}