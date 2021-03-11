import user from '../../assets/imgs/user-circle-solid.svg';

import './DadosBasicos';
import React from 'react';
import styled from 'styled-components';
import FieldsetForm from '../../components/FieldsetForm';
import InputFormulario from '../../components/InputFormulario';
import Button from '../../components/Button';
import PageDefault from '../../components/PageDefault';

// Estilizando componente
const DadosBasicosWrapper = styled.div`
    div#preview {
        width: 130px;
        height: 130px;
        background-color: #b6b8b9;
        border-radius: 100%;
        margin-bottom: 15px;
        overflow: hidden;
    }
    div#preview img {
        width: 100%;
        height: 100%;
    }
    label[for="foto"] {
        text-align: center;
        margin: 0.5rem auto 0.5rem 0px;
        background-color: rgb(52, 152, 219);
        color: white;
        margin-top: 0.7%;
        padding: 0.5rem;
        font-size: 1.1rem;
        border-radius: 10px;
    }
    label[for="foto"]:hover {
        cursor: pointer;
    }
    input[type="file"] {
        display: none;
    }
    input[type="button"]:nth-child(1) {
        padding: 0.7rem 0px;
        width: 150px;
    }
`;

// Exportando componente
export default () => (
    <DadosBasicosWrapper>
        <PageDefault>
            <form>
                <FieldsetForm tituloInstrucao="Foto de perfil" instrucao="Adicione uma foto ao seu perfil">
                    <InputFormulario>
                        <div id="preview"><img src={user} id="img-preview"/></div>
                        <label for="foto" id="label-foto">Carregar Foto</label>
                        <input type="file" id="foto" required/>
                    </InputFormulario>
                </FieldsetForm>
                <FieldsetForm tituloInstrucao="Email" instrucao="Você pode alterar seu email">
                    <InputFormulario>
                        <label className="required">Email</label>
                        <input type="email" placeholder="email@exemplo.com" required/>
                        <Button valueButton="Atualizar Email" type="button" color="rgb(41, 128, 185)" align="left"/>
                    </InputFormulario>
                </FieldsetForm>
                <FieldsetForm tituloInstrucao="Instruções" instrucao="Preencha os seus dados de perfil. Sempre mantenha seu telefone atualizado">
                    <InputFormulario>
                        <label className="required">Nome</label>
                        <input type="text" placeholder="Digite seu nome" required/>
                    </InputFormulario>
                    <InputFormulario>
                        <label className="required">Sobrenome</label>
                        <input type="text" placeholder="Digite seu sobrenome" required/>
                    </InputFormulario>
                    <InputFormulario>
                        <label className="required">Telefone</label>
                        <input type="text" placeholder="(00) 00000-0000" required/>
                    </InputFormulario>
                </FieldsetForm>
                <FieldsetForm tituloInstrucao="Links pessoais" instrucao="Compartilhe seu perfil de outras plataformas aqui">
                    <InputFormulario>
                        <label className="required">Github</label>
                        <input type="text" placeholder="https://www.github.com/abcdefghi" required/>
                    </InputFormulario>
                    <InputFormulario>
                        <label className="required">Behance</label>
                        <input type="text" placeholder="https://www.behance.net/abcdefghi" required/>
                    </InputFormulario>
                    <InputFormulario>
                        <label className="required">Linkedin</label>
                        <input type="text" placeholder="https://www.linkedin.com/in/abcdefghi" required/>
                    </InputFormulario>
                </FieldsetForm>
                <Button valueButton="Enviar" type="submit"/>
            </form>
        </PageDefault>
    </DadosBasicosWrapper>
);