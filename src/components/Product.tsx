import * as React from "react";
import { Link } from "react-router-dom";
import { contactPath, productsPath, rootPath, selfIntroPath } from "../routes";
import product1 from "../styles/images/product1.png";
import product2 from "../styles/images/product2.png";
import { Head } from "./Head";

export const Product = () => (
  <div>
    <Head
      title={"プロダクト"}
      description={"Gettyのプロダクト情報です"}
      url={productsPath()}
    />
    <div className="pd-Content">
      <div className="pd-Content_title">プロダクト</div>
      <div className="pd-Content_bar" />
      <div className="pd-Content_description">
        <div className="pd-Content_description-text">
          <h2>ポートフォリオサイト</h2>
          React + TypeScript + Phoenix(Elixir)で実装しました。 <br />
          フロントエンドはSPAとして実装しており、PWAに対応しています <br />
          API実装にはGraphQLを用い、クライアントにはApolloClientを使用しました。{" "}
          <br />
          CSSはフルスクラッチ。 <br />
          <a
            href="https://github.com/getty104/getty104.github.io"
            target="_blank"
          >
            フロントエンドのソースコード
          </a>{" "}
          <br />
          <a href="https://github.com/getty104/blog_app_ex" target="_blank">
            バックエンドのソースコード
          </a>
        </div>
        <a
          href="https://www.getty104.tk"
          target="_blank"
          className="pd-Content_description-image"
        >
          <img src={product1} />
        </a>
      </div>
      <div className="pd-Content_description">
        <div className="pd-Content_description-text">
          <h2>穹図書館蒼</h2>
          完全な個人開発 <br />
          バックエンドはRails、フロントはReact、スタイルはCSS in
          JSのEmotionを使っています。
        </div>
        <a
          href="https://soukyu.blue"
          target="_blank"
          className="pd-Content_description-image"
        >
          <img src={product2} />
        </a>
      </div>
      <div className="pd-Content_description">
        <div className="pd-Content_description-other">
          <h2>スキルセット</h2>
          言語：Ruby, TypeScript, SQL, Elixir, Java, Solidity, python3, C++
          <br />
          フレームワーク： Rails, React, hyperapp, Phoenix <br />
          ツール： BigQuery, Docker, Vagrant, GraphQL, ServiceWorker,
          TreasureData, Terraform, Chef <br />
          最近は関数型言語とドメイン駆動設計,
          クリーンアーキテクチャに興味があります。
        </div>
      </div>
    </div>
    <div className="pd-Footer">
      <Link to={selfIntroPath()} className="pd-Footer_column">
        自己紹介
      </Link>
      <Link to={rootPath()} className="pd-Footer_column">
        トップ
      </Link>
      <Link to={contactPath()} className="pd-Footer_column">
        コンタクト
      </Link>
    </div>
  </div>
);
