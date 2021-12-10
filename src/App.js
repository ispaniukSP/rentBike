import React from 'react';
import Auth from './Components/Auth/Auth';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import City from './Components/City/City';
import History from './Components/History/History';
import { HomeApp } from './Components/Home';
import { CenterApp } from './Components/Center/index';
import { PaymentApp } from './Components/Payment';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router path="*" exact={true} component={Auth}>
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
