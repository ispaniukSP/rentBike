import React from "react";
import { Route, Switch } from "react-router";
import { HomePage } from "./Homepage";

export const HomeApp = () => {
  return (
    <Switch>
      <Route exact path="/app" component={HomePage} />
      <Route exact path="/app/city/:cityId" component={HomePage} />
      <Route exact path="/app/city/:cityId/center/:centerId" component={HomePage} />
    </Switch>
  );
};
