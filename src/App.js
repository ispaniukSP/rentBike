import React from 'react';
import Auth from './container/Auth/Auth';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import City from './container/City/City';
import History from './container/History/History';
import { HomeApp } from './container/Home';
import { CenterApp } from './container/Center/index';
import { PaymentApp } from './container/Payment';
import ProtectedRoute from './ProtectedRoute';
import { NotFound } from './container/404';

function App() {
  return (
    <Router path="*" exact={true} component={NotFound}>
      <Switch>
        <Route path="/auth" component={Auth} />
        <ProtectedRoute path="/app"  component={HomeApp} />
        <ProtectedRoute path="/city" exact component={City} />
        <ProtectedRoute path="/center" component={CenterApp} />
        <ProtectedRoute path="/payment" component={PaymentApp} />
        <ProtectedRoute path="/history" component={History} />
        <Redirect from="/" to="/auth/signin" />
      </Switch>
    </Router>
  );
}

export default App;
