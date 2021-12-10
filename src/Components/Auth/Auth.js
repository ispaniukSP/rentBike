import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import { AuthLayout } from "../../layouts";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


function Auth() {
  return (
      <Switch>
        <AuthLayout>
          <Route exact path="/auth/signin" component={SignIn} />
          <Route exact path="/auth/signup" component={SignUp} />
          <Redirect from="/auth" to="/auth/signin" />
        </AuthLayout>
      </Switch>
  );
}

export default Auth;
