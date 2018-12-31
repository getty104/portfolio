import * as React from "react";
import { Link } from "react-router-dom";
import { productsPath, rootPath, selfIntroPath } from "../routes";
import facebook from "../styles/images/facebook.png";
import github from "../styles/images/github.png";
import twitter from "../styles/images/twitter.png";

/* tslint:disable */
export class Contact extends React.Component {
  public componentDidMount() {
    window.scrollTo(0, 0);
  }

  public render() {
    return (
      <div>
        <div className="ct-Content">
          <div className="ct-Content_title">コンタクト</div>
          <div className="ct-Content_bar" />
          <div className="ct-Content_description">
            <a href="https://www.facebook.com/profile.php?id=100009972646027" target="_blank"><img src={facebook} className="ct-Content_description-image"/></a>
            <a href="https://twitter.com/getty104" target="_blank"><img src={twitter} className="ct-Content_description-image"/></a>
            <a href="https://github.com/getty104" target="_blank"><img src={github} className="ct-Content_description-image"/></a>
          </div>
        </div>
        <div className="ct-Footer">
          <Link to={productsPath()} className="ct-Footer_column">プロダクト</Link>
          <Link to={rootPath()} className="ct-Footer_column">トップ</Link>
          <Link to={selfIntroPath()} className="ct-Footer_column">自己紹介</Link>
        </div>
      </div>
    );
  }
}
