import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 

import PomodoTimer from './pages/pomodoroTimer/'
export default function Routes()
{
    return(
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact component={PomodoTimer}/>
            </Switch>
        </BrowserRouter>
    );
}