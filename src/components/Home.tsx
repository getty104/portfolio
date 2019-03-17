import * as React from "react";
import { Link } from "react-router-dom";
import {
  blogsPath,
  contactPath,
  productsPath,
  rootPath,
  selfIntroPath
} from "../routes";
import { Head } from "./Head";

export const Home = () => (
  <div>
    <Head url={rootPath()} />
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
      <Link to={blogsPath()} className="hm-Content_blog" target="_blank">
        <div className="hm-Content_blog-bar" />
        <div className="hm-Content_blog-title">ブログ</div>
      </Link>
    </div>
    <div className="hm-Footer">
      <div className="hm-Footer_column">
        &copy; {`2018 - ${new Date().getFullYear()} Toshifumi Kiyono`}
      </div>
    </div>
  </div>
);
