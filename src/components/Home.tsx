import * as React from "react";

export class Home extends React.Component {
  public render() {
    return (
      <div className="hm-Bar">
        <a className="hm-Bar_profile" href="#">
          <div className="hm-Bar_profile-bar" />
          <div className="hm-Bar_profile-title">自己紹介</div>
        </a>
        <a className="hm-Bar_skill" href="#">
          <div className="hm-Bar_skill-bar" />
          <div className="hm-Bar_skill-title">スキル</div>
        </a>
        <a className="hm-Bar_contents" href="#">
          <div className="hm-Bar_contents-bar" />
          <div className="hm-Bar_contents-title">ブログ</div>
        </a>
        <a className="hm-Bar_access" href="#">
          <div className="hm-Bar_access-bar" />
          <div className="hm-Bar_access-title">アクセス</div>
        </a>
      </div>
    );
  }
}
