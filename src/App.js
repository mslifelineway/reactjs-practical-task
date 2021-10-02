import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { pagePaths } from "./utils/constants";
import { Login, Register, Dashboard, Page404 } from "./containers";
import { SnackbarContextProvider } from "./context/SnackbarContext";
import { ProtectedRoute } from "./components";

function App() {
  return (
    <SnackbarContextProvider>
      <Router>
        <Switch>
          <Redirect exact path={pagePaths.root} to={pagePaths.login} />
          <Route path={pagePaths.login} component={Login} />
          <Route path={pagePaths.register} component={Register} />
          <ProtectedRoute path={pagePaths.dashboard} component={Dashboard} />
          <Route path={pagePaths.all} component={Page404} />
        </Switch>
      </Router>
    </SnackbarContextProvider>
  );
}

export default App;
