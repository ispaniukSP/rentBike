import React from "react";
import { Route, Switch } from "react-router";
import { Center } from "./Center";

export const HomeApp = () => {
  return (
    <Switch>
      <Route exact path="/center/:centerId" component={Center} />
    </Switch>
  );
};