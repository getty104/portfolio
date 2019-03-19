import * as React from "react";
import { Link } from "react-router-dom";
import { contactPath, productsPath, rootPath } from "../routes";
import { Head } from "./Head";

export const SelfIntro = () => (
  <div>
    <Head
      title={"自己紹介"}
      description={"Gettyの自己紹介情報です"}
      url={productsPath()}
    />
    <div className="si-Content">
      <div className="si-Content_title">自己紹介</div>
      <div className="si-Content_bar" />
      <div className="si-Content_description">
        <div className="si-Content_description-image" />
        <div className="si-Content_description-text">
          名前：清野隼史 <br />
          身長：161センチ <br />
          1996年4月13日生まれ。東京都出身。 <br />
          2015年に早稲田大学基幹理工学部に入学。
          <br />
          翌年早稲田大学基幹理工学部情報理学科に所属。 <br />
          大学4年時より後藤滋樹研究室に所属。 <br />
          2019年3月に大学卒業。 <br />
          Web開発は大学2年の頃から始める。
        </div>
      </div>
      <div className="si-Content_resume">
        <div className="si-Content_resumeTitle">履歴</div>
        <div className="si-Content_resumeItem">
          <div className="si-Content_resumeItem-year">2019/04 - 現在</div>
          <div className="si-Content_resumeItem-title">株式会社エイチーム</div>
        </div>
        <div className="si-Content_resumeItem">
          <div className="si-Content_resumeItem-year">2018/06 - 2019/02</div>
          <div className="si-Content_resumeItem-title">Increments株式会社</div>
        </div>
        <div className="si-Content_resumeItem">
          <div className="si-Content_resumeItem-year">2018/02 - 2018/05</div>
          <div className="si-Content_resumeItem-title">MF KESSAI</div>
        </div>
        <div className="si-Content_resumeItem">
          <div className="si-Content_resumeItem-year">2017/09 - 2018/01</div>
          <div className="si-Content_resumeItem-title">
            株式会社マネーフォワード
          </div>
        </div>
        <div className="si-Content_resumeItem">
          <div className="si-Content_resumeItem-year">2016/11 - 2018/01</div>
          <div className="si-Content_resumeItem-title">
            株式会社京橋ファクトリー（現オトナル）
          </div>
        </div>
      </div>
    </div>
    <div className="si-Footer">
      <Link to={contactPath()} className="si-Footer_column">
        コンタクト
      </Link>
      <Link to={rootPath()} className="si-Footer_column">
        トップ
      </Link>
      <Link to={productsPath()} className="si-Footer_column">
        プロダクト
      </Link>
    </div>
  </div>
);
