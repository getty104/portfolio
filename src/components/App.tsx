import * as React from "react";

import { Home } from "./Home";

import "../styles/index.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { accessPath, productsPath, rootPath, selfIntroPath } from "../routes";
import { Access } from "./Access";
import { Product } from "./Product";
import { SelfIntro } from "./SelfIntro";

export class App extends React.Component {
  public render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact={true} path={rootPath()} render={() => <Home />} />
          <Route
            exact={true}
            path={selfIntroPath()}
            render={() => <SelfIntro />}
          />
          <Route
            exact={true}
            path={productsPath()}
            render={() => <Product />}
          />
          <Route exact={true} path={accessPath()} render={() => <Access />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
