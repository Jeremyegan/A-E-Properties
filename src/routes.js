import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';


export default(
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />

        </Switch>
    </div>
)
