import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Abilities from '../sections/abilities/Abilities';
import Home from '../sections/home/Home';

function SectionsRoutes() {
  return (
    <div>
      <Switch>
        <Route path="/pokemon">
          <Home />
        </Route>
        <Route path="/abilities">
          <Abilities />
        </Route>
        {/* <Route path="/">
          <Home />
        </Route> */}
        <Redirect to="/pokemon" />
      </Switch>
    </div>
  );
}

export default SectionsRoutes;
