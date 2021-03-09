import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Localizacao from './Pages/Localizacao';
import DadosBasicos from './Pages/DadosBasicos';

export default () => (
    <Switch>
        <Route path="/localizacao" component={Localizacao}/>
        <Route path="/dadosbasicos" component={DadosBasicos}/>
        <Route component={() => <div>Page 404! Error.</div>}/>
    </Switch>
);