import * as React from "react";

import { Home } from "./Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";

export class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" render={() => <Home />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
