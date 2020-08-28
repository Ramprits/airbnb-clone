import React, { Fragment, lazy, Suspense } from "react";
import HeaderComponent from "../Components/Header/Header.component";
import { Switch, Route } from "react-router-dom";
const HomePage = lazy(() => import("./Home/Home.page"));
const LoginPage = lazy(() => import("../pages/Authentication/LoginPage"));
const RegisterPage = lazy(() => import("../pages/Authentication/RegisterPage"));

function App() {
  return (
    <Fragment>
      <HeaderComponent />
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Suspense>
      </Switch>
    </Fragment>
  );
}

export default App;
