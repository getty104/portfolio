import * as React from "react";
import { Link } from "react-router-dom";

/* tslint:disable */
export class SelfIntro extends React.Component {
  public render() {
    return (
      <div>
        <div className="si-Content">
          <div className="si-Content_title">自己紹介</div>
          <div className="si-Content_bar" />
          <div className="si-Content_description">
            <div className="si-Content_description-image" />
            <div className="si-Content_description-text">
              名前：清野隼史 <br />
              1996年4月13日生まれ。東京都出身。 <br />
              2015年に早稲田大学基幹理工学部に入学。<br />
              翌年早稲田大学基幹理工学部情報理学科に所属。 <br />
              大学4年時より後藤滋樹研究室に所属。 <br />
              2019年3月に大学卒業予定。 <br />

              Web開発は大学2年の頃から始める。
            </div>
          </div>
        </div>
        <div className="si-Footer">
          <Link to="access" className="si-Footer_column">アクセス</Link>
          <Link to="/portfolio" className="si-Footer_column">トップ</Link>
          <Link to="skills" className="si-Footer_column">スキル</Link>
        </div>
      </div>
    );
  }
}
