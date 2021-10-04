import React from "react";
import { Route, Switch } from "react-router";
import Center from "./Center";

export const CenterApp = () => {
  return (
    <Switch>
      <Route exact path="/center/:centerId" component={Center} />
      <Route exact path="/center/:centerId/payment/:paymentId" component={Center} />
    </Switch>
  );
};