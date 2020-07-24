import React from 'react';
import { Route, Switch } from "react-router-dom";
import Abilities from '../sections/abilities/Abilities';
import Home from '../sections/home/Home';

function SectionsRoutes() {
  return (
    <div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/abilities">
          <Abilities />
        </Route>
      </Switch>
    </div>
  );
}

export default SectionsRoutes;
