import './Localizacao.css';
import React from 'react';
import FieldsetForm from '../../components/FieldsetForm';
import InputFormulario from '../../components/InputFormulario';
import Button from '../../components/Button';
import PageDefault from '../../components/PageDefault';

export default () => (
    <PageDefault>
        <h1>Localização</h1>
        <form>
            <FieldsetForm tituloInstrucao="Instruções" instrucao="Preencha seus dados de Localização. Sempre os mantenha atualizado.">
                <InputFormulario>
                    <label>CEP<span className="required">*</span></label>
                    <input type="text" placeholder="12345-678" required/>
                </InputFormulario>
                <InputFormulario>
                    <label>Cidade<span className="required">*</span></label>
                    <input type="text" placeholder="Insira o nome da sua cidade atual" required/>
                </InputFormulario>
                <InputFormulario>
                    <label>Estado<span className="required">*</span></label>
                    <input type="text" placeholder="Selecione o estado" required/>
                </InputFormulario>
                <InputFormulario>
                    <label>Bairro<span className="required">*</span></label>
                    <input type="text" placeholder="Insira o nome do seu bairro" required/>
                </InputFormulario>
                <InputFormulario>
                    <label>Endereço<span className="required">*</span></label>
                    <input type="text" placeholder="Insira seu endereço" required/>
                </InputFormulario>
                <InputFormulario>
                    <label>Número<span className="required">*</span></label>
                    <input type="text" placeholder="Insira o número da sua residência" required/>
                </InputFormulario>
                <InputFormulario>
                    <label>Complemento</label>
                    <input type="text" placeholder="Insira um complemento se achar necessário"/>
                </InputFormulario>
            </FieldsetForm>
            <Button valueButton="Enviar" type="submit"/>
        </form>
    </PageDefault>
);