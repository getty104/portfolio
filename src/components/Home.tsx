import * as React from "react";

export class Home extends React.Component {
  public render() {
    return (
      <div className="container">
        <div className="hm-Bar hm-Bar_profile" />
        <div className="hm-Bar hm-Bar_skill" />
        <div className="hm-Bar hm-Bar_contents" />
        <div className="hm-Bar hm-Bar_access" />
      </div>
    );
  }
}
