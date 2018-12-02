import * as React from "react";

import { Home } from "./Home";

import "../styles/index.scss";

const root = "portfolio";

import { BrowserRouter, Route, Switch } from "react-router-dom";

export class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={`/${root}`} render={() => <Home />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
