import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';


export default(
    <div>
        <Switch>
            <Route exact path="/" component={Home} />

        </Switch>
    </div>
)
