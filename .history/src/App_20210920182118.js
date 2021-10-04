import React from 'react';
import Auth from './Components/Auth/Auth';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import City from './Components/City/City';
import Payment from './Components/Payment/Payment';
import History from './Components/History/History';
import { HomeApp } from './Components/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/app"  component={HomeApp} />
        <Route path="/city" exact component={City} />
        <Route path="/payment" component={Payment} />
        <Route path="/history" component={History} />
        <Redirect from="/" to="/app" />
      </Switch>
    </Router>
  );
}

export default App;
