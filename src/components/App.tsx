import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {
  accessPath,
  blogPath,
  blogsPath,
  productsPath,
  rootPath,
  selfIntroPath
} from "../routes";
import "../styles/index.scss";

import { BlogIndex } from "./BlogIndex";
import { BlogShow } from "./BlogShow";
import { Contact } from "./Contact";
import { Home } from "./Home";
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
          <Route exact={true} path={accessPath()} render={() => <Contact />} />
          <Route exact={true} path={blogsPath()} render={() => <BlogIndex />} />
          <Route
            path={blogPath({})}
            render={props => <BlogShow {...props} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
