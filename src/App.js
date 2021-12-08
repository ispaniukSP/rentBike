import React from 'react';
import { Provider } from "react-redux"
import Auth from './Components/Auth/Auth';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import City from './Components/City/City';
import History from './Components/History/History';
import { HomeApp } from './Components/Home';
import { CenterApp } from './Components/Center/index';
import { PaymentApp } from './Components/Payment';
import store from "./store"

function App() {
  return (
    <Provider store ={store}>
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
    </Provider>
  );
}

export default App;
