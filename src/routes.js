import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import RequestRide from './pages/RequestRide'
import StartRide from './pages/StartRide'
import RideStatus from './pages/RideStatus'


export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/"exact component={Logon} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/ride/request" component={RequestRide} />
            <Route path="/ride/start" component={StartRide} />
            <Route path="/ride/status" component={RideStatus} />

        </Switch>
        </BrowserRouter>
    )
}

// utilizamos o exact para indicar qual será o caminho exato
// da página inicial se não o react interpreta sempre  começo que seria as barras
