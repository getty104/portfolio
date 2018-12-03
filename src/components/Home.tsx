import * as React from "react";

export class Home extends React.Component {
  public render() {
    return (
      <div className="hm-Bar">
        <div className="hm-Bar_profile" />
        <div className="hm-Bar_skill" />
        <div className="hm-Bar_contents" />
        <div className="hm-Bar_access" />
      </div>
    );
  }
}
