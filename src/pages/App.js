import React, { Fragment } from "react";
import HeaderComponent from "../Components/Header/Header.component";
import HomePage from "./Home/Home.page";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./Authentication/LoginPage";
import RegisterPage from "./Authentication/RegisterPage";

function App() {
  return (
    <Fragment>
      <HeaderComponent />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
