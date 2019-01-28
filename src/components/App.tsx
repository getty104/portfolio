import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {
  blogPath,
  blogsPath,
  contactPath,
  productsPath,
  rootPath,
  selfIntroPath
} from "../routes";
import "../styles/index.scss";

import { GA } from "../tools/ga";
import { BlogIndex } from "./BlogIndex";
import { BlogShow } from "./BlogShow";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { Product } from "./Product";
import { SelfIntro } from "./SelfIntro";

export class App extends React.Component {
  public render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            exact={true}
            path={rootPath()}
            render={() => {
              GA.track();
              return <Home />;
            }}
          />
          <Route
            exact={true}
            path={selfIntroPath()}
            render={() => {
              GA.track();
              return <SelfIntro />;
            }}
          />
          <Route
            exact={true}
            path={productsPath()}
            render={() => {
              GA.track();
              return <Product />;
            }}
          />
          <Route
            exact={true}
            path={contactPath()}
            render={() => {
              GA.track();
              return <Contact />;
            }}
          />
          <Route
            exact={true}
            path={blogsPath()}
            render={props => {
              GA.track();
              return <BlogIndex {...props} />;
            }}
          />
          <Route
            path={blogPath({})}
            render={props => {
              GA.track();
              return <BlogShow {...props} />;
            }}
          />
          <Route render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
