import React from 'react';
import PageDefault from '../../components/PageDefault';
import FormLoginCadastro from '../../components/FormLoginCadastro';
import InputFormulario from '../../components/InputFormulario';

export default () => (
    <PageDefault>
        <FormLoginCadastro valueButton="Login">
            <InputFormulario>
                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="email@exemplo.com" required/>
                <label for="senha">Senha:</label>
                <input type="password" id="senha" placeholder="Digite sua senha" required/>
            </InputFormulario>
        </FormLoginCadastro>
    </PageDefault>
);