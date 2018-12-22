import * as React from "react";
import { Link } from "react-router-dom";
import { blogsPath, contactPath, productsPath, selfIntroPath } from "../routes";

export class Home extends React.Component {
  public componentDidMount() {
    window.scrollTo(0, 0);
  }

  public render() {
    return (
      <div>
        <div className="hm-Content">
          <Link to={selfIntroPath()} className="hm-Content_profile">
            <div className="hm-Content_profile-bar" />
            <div className="hm-Content_profile-title">自己紹介</div>
          </Link>
          <Link to={productsPath()} className="hm-Content_product">
            <div className="hm-Content_product-bar" />
            <div className="hm-Content_product-title">プロダクト</div>
          </Link>
          <Link to={contactPath()} className="hm-Content_contact">
            <div className="hm-Content_contact-bar" />
            <div className="hm-Content_contact-title">コンタクト</div>
          </Link>
          <Link to={blogsPath()} className="hm-Content_blog" href="#">
            <div className="hm-Content_blog-bar" />
            <div className="hm-Content_blog-title">ブログ</div>
          </Link>
        </div>
        <div className="hm-Footer">
          <div className="hm-Footer_column">Getty's Room</div>
        </div>
      </div>
    );
  }
}
