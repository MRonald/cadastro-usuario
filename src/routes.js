import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Localizacao from './Pages/Localizacao';
import DadosBasicos from './Pages/DadosBasicos';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/localizacao" component={Localizacao}/>
            <Route path="/dadosbasicos" component={DadosBasicos}/>
            <Route component={() => <div>Page 404! Error.</div>}/>
        </Switch>
    );
}