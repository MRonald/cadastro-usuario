import React from 'react';
import styled from 'styled-components';
import FieldsetForm from '../../components/FieldsetForm';
import InputFormulario from '../../components/InputFormulario';
import Button from '../../components/Button';
import PageDefault from '../../components/PageDefault';

// Estilizando componente
const LocalizacaoWrapper = styled.div`
    h1 {
        text-align: center;
        text-transform: uppercase;
        font-size: 0.9rem;
        color: rgba(0, 0, 0, .5);
        margin: 2.5rem auto -3rem auto;
        min-width: 270px;
    }
`;

// Exportando componente
export default function Localizacao() { 
    return (
        <LocalizacaoWrapper>
            <PageDefault>
                <h1>Localização</h1>
                <form>
                    <FieldsetForm tituloInstrucao="Instruções" instrucao="Preencha seus dados de Localização. Sempre os mantenha atualizado.">
                        <InputFormulario>
                            <label class="required">CEP</label>
                            <input type="text" placeholder="12345-678" required/>
                        </InputFormulario>
                        <InputFormulario>
                            <label class="required">Cidade</label>
                            <input type="text" placeholder="Insira o nome da sua cidade atual" required/>
                        </InputFormulario>
                        <InputFormulario>
                            <label class="required">Estado</label>
                            <select>
                                <option selected disabled>Selecione seu estado</option>
                                <option>RN</option>
                                <option>PE</option>
                            </select>
                        </InputFormulario>
                        <InputFormulario>
                            <label class="required">Bairro</label>
                            <input type="text" placeholder="Insira o nome do seu bairro" required/>
                        </InputFormulario>
                        <InputFormulario>
                            <label class="required">Endereço</label>
                            <input type="text" placeholder="Insira seu endereço" required/>
                        </InputFormulario>
                        <InputFormulario>
                            <label class="required">Número</label>
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
        </LocalizacaoWrapper>
    );
}