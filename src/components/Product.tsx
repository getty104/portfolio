import * as React from "react";
import { Link } from "react-router-dom";
import { accessPath, rootPath, selfIntroPath } from "../routes";

/* tslint:disable */
export class Product extends React.Component {
  public render() {
    return (
      <div>
        <div className="pd-Content">
          <div className="pd-Content_title">プロダクト</div>
          <div className="pd-Content_bar" />
          <div className="pd-Content_description">
            <a href="https://getty104.github.io/portfolio" target="_blank"><img src="%PUBLIC_URL%/images/product1.png" className="pd-Content_description-image"/></a>
            <div className="pd-Content_description-text">
              <h2>ポートフォリオサイト</h2>
               React + TypeScriptで実装しました。 <br />
               cssはフルスクラッチ。
            </div>
          </div>
          <div className="pd-Content_description">
            <a href="https://www.life-squad.jp" target="_blank"><img src="%PUBLIC_URL%/images/product2.png" className="pd-Content_description-image"/></a>
            <div className="pd-Content_description-text">
              <h2>Life Squad</h2>
               Rails + React + TypeScriptで実装。 <br />
               知人とともに作成しました。 <br />
               主にサーバーサイド、インフラ、ビジネスロジック、フロントエンドの実装を担当しました。
            </div>
          </div>
          <div className="pd-Content_description">
            <div className="pd-Content_description-other">
              <h2>スキルセット</h2>
                言語：Ruby, TypeScript, SQL, Elixir, Java, Solidity, python3, C++ <br />
                フレームワーク： Rails, React, hyperapp, Phoenix <br />
                ツール： BigQuery, Docker, Vagrant, GraphQL <br />
                Rails, React, TypeScriptを用いた開発の経験がもっとも多いです。 <br />
                最近は関数型言語とドメイン駆動設計に興味があります。
            </div>
          </div>
        </div>
        <div className="pd-Footer">
          <Link to={selfIntroPath()} className="pd-Footer_column">自己紹介</Link>
          <Link to={rootPath()} className="pd-Footer_column">トップ</Link>
          <Link to={accessPath()} className="pd-Footer_column">アクセス</Link>
        </div>
      </div>
    );
  }
}
