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

const handlePageChange = () => {
  window.scrollTo(0, 0);
  GA.track();
};

export const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route
        exact={true}
        path={rootPath()}
        render={() => {
          handlePageChange();
          return <Home />;
        }}
      />
      <Route
        exact={true}
        path={selfIntroPath()}
        render={() => {
          handlePageChange();
          return <SelfIntro />;
        }}
      />
      <Route
        exact={true}
        path={productsPath()}
        render={() => {
          handlePageChange();
          return <Product />;
        }}
      />
      <Route
        exact={true}
        path={contactPath()}
        render={() => {
          handlePageChange();
          return <Contact />;
        }}
      />
      <Route
        exact={true}
        path={blogsPath()}
        render={props => {
          handlePageChange();
          return <BlogIndex {...props} />;
        }}
      />
      <Route
        path={blogPath({})}
        render={props => {
          handlePageChange();
          return <BlogShow {...props} />;
        }}
      />
      <Route
        render={() => {
          handlePageChange();
          return <NotFound />;
        }}
      />
    </Switch>
  </BrowserRouter>
);
