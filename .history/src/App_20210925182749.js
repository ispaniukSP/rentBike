import React from 'react';
import Auth from './Components/Auth/Auth';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import City from './Components/City/City';
import History from './Components/History/History';
import { HomeApp } from './Components/Home';
import { CenterApp } from './Components/Center/index';
import { PaymentApp } from './Components/Payment';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/app"  component={HomeApp} />
        <Route path="/city" exact component={City} />
        <Route path="/center" component={CenterApp} />
        <Route path="/payment" component={PaymentApp} />
        <Route path="/history" component={History} />
        <Redirect from="/" to="/city" />
      </Switch>
    </Router>
  );
}

export default App;