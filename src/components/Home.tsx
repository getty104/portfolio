import * as React from "react";

export class Home extends React.Component {
  public render() {
    return (
      <div className="hm-Content">
        <a className="hm-Content_profile" href="#">
          <div className="hm-Content_profile-bar" />
          <div className="hm-Content_profile-title">自己紹介</div>
        </a>
        <a className="hm-Content_skill" href="#">
          <div className="hm-Content_skill-bar" />
          <div className="hm-Content_skill-title">スキル</div>
        </a>
        <a className="hm-Content_blog" href="#">
          <div className="hm-Content_blog-bar" />
          <div className="hm-Content_blog-title">ブログ</div>
        </a>
        <a className="hm-Content_access" href="#">
          <div className="hm-Content_access-bar" />
          <div className="hm-Content_access-title">アクセス</div>
        </a>
      </div>
    );
  }
}
