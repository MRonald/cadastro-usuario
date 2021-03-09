import './DadosBasicos.css';
import React from 'react';
import FieldsetForm from '../../components/FieldsetForm';
import InputFormulario from '../../components/InputFormulario';
import Button from '../../components/Button';
import PageDefault from '../../components/PageDefault';

export default () => (
    <PageDefault>
        <form>
            <FieldsetForm tituloInstrucao="Foto de perfil" instrucao="Adicione uma foto ao seu perfil">
                <InputFormulario>
                    <div id="preview"></div>
                    <label for="foto">Carregar Foto</label>
                    <input type="file" id="foto" required/>
                </InputFormulario>
            </FieldsetForm>
            <FieldsetForm tituloInstrucao="Email" instrucao="Você pode alterar seu email">
                <InputFormulario>
                    <label>Email<span className="required">*</span></label>
                    <input type="email" placeholder="email@exemplo.com" required/>
                    <Button valueButton="Atualizar Email" type="button" color="rgb(41, 128, 185)" align="left"/>
                </InputFormulario>
            </FieldsetForm>
            <FieldsetForm tituloInstrucao="Instruções" instrucao="Preencha os seus dados de perfil. Sempre mantenha seu telefone atualizado">
                <InputFormulario>
                    <label>Nome<span className="required">*</span></label>
                    <input type="text" placeholder="Digite seu nome" required/>
                </InputFormulario>
                <InputFormulario>
                    <label>Sobrenome<span className="required">*</span></label>
                    <input type="text" placeholder="Digite seu sobrenome" required/>
                </InputFormulario>
                <InputFormulario>
                    <label>Telefone<span className="required">*</span></label>
                    <input type="text" placeholder="(00) 00000-0000" required/>
                </InputFormulario>
            </FieldsetForm>
            <FieldsetForm tituloInstrucao="Links pessoais" instrucao="Compartilhe seu perfil de outras plataformas aqui">
                <InputFormulario>
                    <label>Github<span className="required">*</span></label>
                    <input type="text" placeholder="https://www.github.com/abcdefghi" required/>
                </InputFormulario>
                <InputFormulario>
                    <label>Behance<span className="required">*</span></label>
                    <input type="text" placeholder="https://www.behance.net/abcdefghi" required/>
                </InputFormulario>
                <InputFormulario>
                    <label>Linkedin<span className="required">*</span></label>
                    <input type="text" placeholder="https://www.linkedin.com/in/abcdefghi" required/>
                </InputFormulario>
            </FieldsetForm>
            <Button valueButton="Enviar" type="submit"/>
        </form>
    </PageDefault>
);