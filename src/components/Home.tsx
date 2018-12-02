import * as React from "react";
import "../styles/index.scss";

export class Home extends React.Component {
  public render() {
    return (
      <div>
        <a className="button">Button</a>
        <a className="button is-primary">Primary button</a>
        <a className="button is-large">Large button</a>
        <a className="button is-loading">Loading button</a>
      </div>
    );
  }
}
