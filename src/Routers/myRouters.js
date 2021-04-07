import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from '../components/Home/Home';


const myRouters = () => {
    return (
        <Switch> 
             <Route exact path="/"> <Home/> </Route>
        </Switch>
    );
};

export default myRouters;