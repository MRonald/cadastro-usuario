import React from 'react';
import Formulario from '../../components/Formulario';
import InputFormulario from '../../components/InputFormulario';
import PageDefault from '../../components/PageDefault';

export default () => (
    <PageDefault>
        <h1>Localização</h1>
        <Formulario tituloInstrucao="Instruções" instrucao="Preencha seus dados de Localização. Sempre os mantenha atualizado.">
            <InputFormulario>
                <label>CEP</label>
                <input type="text" placeholder="12345-678"/>
            </InputFormulario>
            <InputFormulario>
                <label>Cidade</label>
                <input type="text" placeholder="Insira o nome da sua cidade atual"/>
            </InputFormulario>
            <InputFormulario>
                <label>Estado</label>
                <input type="text" placeholder="Selecione o estado"/>
            </InputFormulario>
            <InputFormulario>
                <label>Bairro</label>
                <input type="text" placeholder="Insira o nome do seu bairro"/>
            </InputFormulario>
            <InputFormulario>
                <label>Endereço</label>
                <input type="text" placeholder="Insira seu endereço"/>
            </InputFormulario>
            <InputFormulario>
                <label>Número</label>
                <input type="text" placeholder="Insira o número da sua residência"/>
            </InputFormulario>
            <InputFormulario notRequired="true">
                <label>Complemento</label>
                <input type="text" placeholder="Insira um complemento se achar necessário"/>
            </InputFormulario>
        </Formulario>
    </PageDefault>
);