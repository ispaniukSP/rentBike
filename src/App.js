import React from 'react';
import Auth from './Components/Auth/Auth';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import City from './Components/City/City';
import History from './Components/History/History';
import { HomeApp } from './Components/Home';
import { CenterApp } from './Components/Center/index';
import { PaymentApp } from './Components/Payment';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => state.user)
  return (
    <Router path="*" exact={true} component={Auth}>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/app"  component={HomeApp} />
        <Route path="/city" exact component={City} />
        <Route path="/center" component={CenterApp} />
        <Route path="/payment" component={PaymentApp} />
        <Route path="/history" component={History} />
        <Redirect from="/" to="/auth/signin" />
      </Switch>
    </Router>
  );
}

export default App;
