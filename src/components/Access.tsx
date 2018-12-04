import * as React from "react";
import { Link } from "react-router-dom";
import { productsPath, rootPath, selfIntroPath } from "../routes";
import facebook from "../styles/images/facebook.png";
import github from "../styles/images/github.png";
import twitter from "../styles/images/twitter.png";

/* tslint:disable */
export class Access extends React.Component {
  public render() {
    return (
      <div>
        <div className="ac-Content">
          <div className="ac-Content_title">アクセス</div>
          <div className="ac-Content_bar" />
          <div className="ac-Content_description">
            <a href="https://www.facebook.com/profile.php?id=100009972646027" target="_blank"><img src={facebook} className="ac-Content_description-image"/></a>
            <a href="https://twitter.com/getty104" target="_blank"><img src={twitter} className="ac-Content_description-image"/></a>
            <a href="https://github.com/getty104" target="_blank"><img src={github} className="ac-Content_description-image"/></a>
          </div>
        </div>
        <div className="ac-Footer">
          <Link to={productsPath()} className="ac-Footer_column">プロダクト</Link>
          <Link to={rootPath()} className="ac-Footer_column">トップ</Link>
          <Link to={selfIntroPath()} className="ac-Footer_column">自己紹介</Link>
        </div>
      </div>
    );
  }
}
