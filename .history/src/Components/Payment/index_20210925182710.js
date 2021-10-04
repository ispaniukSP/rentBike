import React from "react";
import { Route, Switch } from "react-router";
import Payment from "./Payment";

export const PaymentApp = () => {
  return (
    <Switch>
      <Route exact path="/payment/:centerId" component={Payment} />
    </Switch>
  );
};